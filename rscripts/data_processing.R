############################################
# R script 
############################################

library(tidyverse)

#load data from csv file
exp_data <- read_csv(
  "/home/pi/project/results.csv")

#Data RQ1: only Chrome as browser
rq1_data <- exp_data %>%
  filter(browser == 'chrome')
summary(rq1_data)

#Data RQ2: all data, grouped by browser
rq2_data <- exp_data
summary(rq2_data)

############################################
# Descriptive statistics and plots
############################################

#Comparison of data RQ1
grouped_data <- rq1_data %>%
  group_by(language) %>%
  summarize(mean_consumption = mean(consumption),
            sd_consumption = sd(consumption))

#Comparison of data RQ2
grouped_data2 <- rq2_data %>%
  group_by(browser) %>%
  summarize(mean_consumption = mean(consumption),
            sd_consumption = sd(consumption))

#RQ1 distribution of consumption
hist(rq1_data$consumption, main='Distribution of consumption',
     xlab='Consumption')

#RQ2 distribution of consumption
hist(rq2_data$consumption, main='Distribution of consumption',
     xlab='Consumption')

#Filter data in different dataframes
js_data <- rq1_data %>%
  filter(language == 'js')
wasm_data <- rq1_data %>%
  filter(language == 'wasm')
chrome_data <- rq2_data %>%
  filter(browser == 'chrome')
chrome_js_data <- chrome_data %>%
  filter(language == 'js')
chrome_wasm_data <- chrome_data %>%
  filter(language == 'wasm')
ff_data <- rq2_data %>%
  filter(browser == 'firefox')
firefox_js_data <- ff_data %>%
  filter(language == 'js')
firefox_wasm_data <- ff_data %>%
  filter(language == 'wasm')

#RQ1 descriptive statistics
summary(js_data)
summary(wasm_data)

#RQ2 descriptive statistics
summary(chrome_js_data)
summary(chrome_wasm_data)
summary(firefox_js_data)
summary(firefox_wasm_data)

par(mfrow=c(1,2))

#RQ1 distribution of consumption of js
js_hist<-ggplot(js_data, aes(x=consumption)) + 
  geom_histogram(color="black", fill="white") +
  labs(x="Energy constumption (J)", y="Frequency", title="Distribution of consumption of JavaScript")
js_hist

#RQ1 distribution of consumption of wasm
wasm_hist<-ggplot(wasm_data, aes(x=consumption)) + 
  geom_histogram(color="black", fill="white") +
  labs(x="Energy constumption (J)", y="Frequency", title = "Distribution of consumption of WebAssembly")
wasm_hist

cowplot::plot_grid(js_hist, wasm_hist, labels = "")

#RQ2 distribution of consumption of chrome js
chrome_js_hist <-ggplot(chrome_js_data, aes(x=consumption)) + 
  geom_histogram(color="black", fill="white") +
  labs(x="Energy constumption (J)", y="Frequency", title = "Chrome and JavaScript")
chrome_js_hist

#RQ2 distribution of consumption of chrome wasm
chrome_wasm_hist <-ggplot(chrome_wasm_data, aes(x=consumption)) + 
  geom_histogram(color="black", fill="white") +
  labs(x="Energy constumption (J)", y="Frequency", title = "Chrome and WebAssembly")
chrome_wasm_hist

#RQ2 distribution of consumption of firefox js
firefox_js_hist <-ggplot(firefox_js_data, aes(x=consumption)) + 
  geom_histogram(color="black", fill="white") +
  labs(x="Energy constumption (J)", y="Frequency", title = "Firefox and JavaScript")
firefox_js_hist

#RQ2 distribution of consumption of firefox wasm
firefox_wasm_hist <-ggplot(firefox_wasm_data, aes(x=consumption)) + 
  geom_histogram(color="black", fill="white") +
  labs(x="Energy constumption (J)", y="Frequency", title = "Firefox and WebAssembly")
firefox_wasm_hist

cowplot::plot_grid(chrome_js_hist, chrome_wasm_hist, firefox_js_hist, firefox_wasm_hist, labels = "")

############################################
# Transformation of data
############################################

#RQ1 transform data of js
js_data <- js_data %>%
  mutate(consumption_log = log(consumption),
         consumption_sqrt = sqrt(consumption),
         consumption_reciprocal = 1/consumption)

#plot columns
plot_js <- c('consumption', 'consumption_log', 
             'consumption_sqrt', 'consumption_reciprocal')

#resize to put graphs next to each other
par(mfrow=c(2,2))

mapply(hist, js_data[plot_js], 
       main=paste('Distribution of', plot_js), xlab= plot_js)

#RQ1 transform data of wasm
wasm_data <- wasm_data %>%
  mutate(consumption_log = log(consumption),
         consumption_sqrt = sqrt(consumption),
         consumption_reciprocal = 1/consumption)

#plot columns
plot_wasm <- c('consumption', 'consumption_log', 
             'consumption_sqrt', 'consumption_reciprocal')

par(mfrow=c(2,2))

mapply(hist, wasm_data[plot_wasm], 
       main=paste('Distribution of', plot_wasm), xlab= plot_wasm)

#RQ2 transform data of chrome & wasm
chrome_wasm_data <- chrome_wasm_data %>%
  mutate(consumption_log = log(consumption),
         consumption_sqrt = sqrt(consumption),
         consumption_reciprocal = 1/consumption)

#plot columns
plot_chrome_wasm <- c('consumption', 'consumption_log', 
               'consumption_sqrt', 'consumption_reciprocal')

par(mfrow=c(2,2))

mapply(hist, chrome_wasm_data[plot_chrome_wasm], 
       main=paste('Distribution of', plot_chrome_wasm), xlab= plot_chrome_wasm)

############################################
# Normality check
############################################
library(car)
par(mfrow=c(1,2))

check_normality <- function(input_data) {
  plot(density(input_data))
  car::qqPlot(input_data)
  shapiro.test(input_data)
}

#Chrome Javascript normality checks
b1_js_data <- js_data %>%
  filter(algorithm == 'nqueens')
b1_js_data$consumption %>%
  check_normality 
b2_js_data <- js_data %>%
  filter(algorithm == 'lavamd')
b2_js_data$consumption %>%
  check_normality 
b3_js_data <- js_data %>%
  filter(algorithm == 'page-rank')
b3_js_data$consumption %>%
  check_normality 
b4_js_data <- js_data %>%
  filter(algorithm == 'hmm')
b4_js_data$consumption %>%
  check_normality 
b5_js_data <- js_data %>%
  filter(algorithm == 'nw')
b5_js_data$consumption %>%
  check_normality 
b6_js_data <- js_data %>%
  filter(algorithm == 'fft')
b6_js_data$consumption %>%
  check_normality 
b7_js_data <- js_data %>%
  filter(algorithm == 'lud')
b7_js_data$consumption %>%
  check_normality 

#Chrome WebAssembly normality checks
b1_wasm_data <- wasm_data %>%
  filter(algorithm == 'nqueens')
b1_wasm_data$consumption %>%
  check_normality 
b2_wasm_data <- wasm_data %>%
  filter(algorithm == 'lavamd')
b2_wasm_data$consumption %>%
  check_normality 
b3_wasm_data <- wasm_data %>%
  filter(algorithm == 'page-rank')
b3_wasm_data$consumption %>%
  check_normality 
b4_wasm_data <- wasm_data %>%
  filter(algorithm == 'hmm')
b4_wasm_data$consumption %>%
  check_normality 
b5_wasm_data <- wasm_data %>%
  filter(algorithm == 'nw')
b5_wasm_data$consumption %>%
  check_normality 
b6_wasm_data <- wasm_data %>%
  filter(algorithm == 'fft')
b6_wasm_data$consumption %>%
  check_normality 
b7_wasm_data <- wasm_data %>%
  filter(algorithm == 'lud')
b7_wasm_data$consumption %>%
  check_normality

#Firefox Javascript normality checks
b1_js_data <- js_data %>%
  filter(algorithm == 'nqueens')
b1_js_data$consumption %>%
  check_normality 
b2_js_data <- js_data %>%
  filter(algorithm == 'lavamd')
b2_js_data$consumption %>%
  check_normality 
b3_js_data <- js_data %>%
  filter(algorithm == 'page-rank')
b3_js_data$consumption %>%
  check_normality 
b4_js_data <- js_data %>%
  filter(algorithm == 'hmm')
b4_js_data$consumption %>%
  check_normality 
b5_js_data <- js_data %>%
  filter(algorithm == 'nw')
b5_js_data$consumption %>%
  check_normality 
b6_js_data <- js_data %>%
  filter(algorithm == 'fft')
b6_js_data$consumption %>%
  check_normality 
b7_js_data <- js_data %>%
  filter(algorithm == 'lud')
b7_js_data$consumption %>%
  check_normality 

#Firefox WebAssembly normality checks
b1_wasm_data <- firefox_js_data %>%
  filter(algorithm == 'nqueens')
b1_wasm_data$consumption %>%
  check_normality 
b2_wasm_data <- firefox_js_data %>%
  filter(algorithm == 'lavamd')
b2_wasm_data$consumption %>%
  check_normality 
b3_wasm_data <- firefox_js_data %>%
  filter(algorithm == 'page-rank')
b3_wasm_data$consumption %>%
  check_normality 
b4_wasm_data <- firefox_js_data %>%
  filter(algorithm == 'hmm')
b4_wasm_data$consumption %>%
  check_normality 
b5_wasm_data <- firefox_js_data %>%
  filter(algorithm == 'nw')
b5_wasm_data$consumption %>%
  check_normality 
b6_wasm_data <- firefox_js_data %>%
  filter(algorithm == 'fft')
b6_wasm_data$consumption %>%
  check_normality 
b7_wasm_data <- firefox_js_data %>%
  filter(algorithm == 'lud')
b7_wasm_data$consumption %>%
  check_normality

############################################
# Normalize data (DELETE?)
############################################

library(bestNormalize)
?bestNormalize
#RQ1
js_best_norm_consumption <- bestNormalize(js_data$consumption)
js_best_norm_consumption

wasm_best_norm_consumption <- bestNormalize(wasm_data$consumption)
wasm_best_norm_consumption

#check shapiro-wilks on new data RQ1
js_norm <- predict(js_best_norm_consumption)
js_norm %>%
  check_normality

wasm_norm <- predict(wasm_best_norm_consumption)
wasm_norm %>%
  check_normality

par(mfrow=c(1,2))
js_best_norm_consumption %>%
  predict %>%
  qqPlot(main="Overview normality JavaScript", xlab="Normality quantiles")

wasm_best_norm_consumption %>%
  predict %>%
  qqPlot(main="Overview normality WebAssembly", xlab="Normality quantiles")

#RQ2
chrome_js_best_norm_consumption <- bestNormalize(chrome_js_data$consumption)
chrome_js_best_norm_consumption

chrome_wasm_best_norm_consumption <- bestNormalize(chrome_wasm_data$consumption)
chrome_wasm_best_norm_consumption

firefox_js_best_norm_consumption <- bestNormalize(firefox_js_data$consumption)
firefox_js_best_norm_consumption

#still does not lead to a normal distribution, so we try to apply orderNorm on this
# data, just like in the other bestNormalize applications
firefox_wasm_best_norm_consumption <- bestNormalize(firefox_wasm_data$consumption)
firefox_wasm_best_norm_consumption

firefox_wasm_best_norm_consumption2 <- orderNorm(firefox_wasm_data$consumption)

#check shapiro-wilks on new data RQ2
chrome_js_norm <- predict(chrome_js_best_norm_consumption)
chrome_js_norm %>%
  check_normality

chrome_wasm_norm <- predict(chrome_wasm_best_norm_consumption)
chrome_wasm_norm %>%
  check_normality

firefox_js_norm <- predict(firefox_js_best_norm_consumption)
firefox_js_norm %>%
  check_normality

firefox_wasm_norm <- predict(firefox_wasm_best_norm_consumption)
firefox_wasm_norm %>%
  check_normality

firefox_wasm_norm2 <- predict(firefox_wasm_best_norm_consumption2)
firefox_wasm_norm2 %>%
  check_normality

par(mfrow=c(2,2))

chrome_js_best_norm_consumption %>%
  predict %>%
  qqPlot(main="Overview normality JavaScript in Chrome", xlab="Normality quantiles")

chrome_wasm_best_norm_consumption %>%
  predict %>%
  qqPlot(main="Overview normality WebAssembly in Chrome", xlab="Normality quantiles")

firefox_js_best_norm_consumption %>%
  predict %>%
  qqPlot(main="Overview normality JavaScript in Firefox", xlab="Normality quantiles")

firefox_wasm_best_norm_consumption2 %>%
  predict %>%
  qqPlot(main="Overview normality WebAssembly in Firefox", xlab="Normality quantiles")

############################################
# Visualizations
############################################

library(ggplot2)

fontSize = 12

#create boxplot
bp <- ggplot(rq1_data, aes(x=language, y=consumption,
                           fill=language, show.legend=F)) +
  theme_bw() +
  xlab('Programming language') + ylab('Energy consumption (J)') +
  geom_boxplot(show.legend = F) +
  stat_summary(fun=mean, color='black', geom='point', 
               shape=5, size=2, show.legend = F) +
  scale_x_discrete(labels=c("JavaScript", "WebAssembly")) + 
  theme(
    strip.text.x = element_text(size=fontSize),
    strip.text.y = element_text(size=fontSize),
    axis.text.x = element_text(size=fontSize),
    axis.text.y = element_text(size=fontSize),
  )
bp

#create grouped boxplot [updated]
bp_g <- ggplot(rq1_data, aes(x=algorithm, y=consumption,
                           fill=language, show.legend=F)) +
  theme_bw() +
  xlab('Benchmark functions') + ylab('Energy consumption (J)') +
  geom_boxplot() +
  labs(fill='Language') +
  stat_summary(fun=mean, color='black', geom='point', 
               shape=5, size=0.5, 
               position=position_dodge(width=0.75), show.legend = F) +
  scale_fill_discrete(labels=c("JavaScript", "WebAssembly")) +
  theme(
    strip.text.x = element_text(size=fontSize),
    strip.text.y = element_text(size=fontSize),
    axis.text.x = element_text(size=fontSize),
    axis.text.y = element_text(size=fontSize),
  )
bp_g

bp_general <- ggplot(data = rq1_data, aes(y = consumption)) +
  theme_bw() +
  ylab('Energy consumption (J)') +
  geom_boxplot() +
  theme(
    strip.text.y = element_text(size=fontSize),
    axis.text.y = element_text(size=fontSize),
  )
bp_general

density <- rq1_data
density$language[density$language == "js"] <- "JavaScript"
density$language[density$language == "wasm"] <- "WebAssembly"
names(density)[names(density) == "language"] <- "Language"

#create density plot
dp <- ggplot(density, aes(x=consumption, color=Language,
                           fill=Language, show.legend=F)) +
  theme_bw() +
  geom_density(alpha=0.4) +
  labs(x='Energy consumption (J)', y = "Density", show.legend=F) +
  theme(
    strip.text.x = element_text(size=fontSize),
    strip.text.y = element_text(size=fontSize),
    axis.text.x = element_text(size=fontSize),
    axis.text.y = element_text(size=fontSize),
  )
dp

#RQ2 density plot
density2 <- rq2_data
density2$language[density2$language == "js"] <- "JavaScript"
density2$language[density2$language == "wasm"] <- "WebAssembly"
names(density2)[names(density2) == "language"] <- "Language"

density2 <- density2 %>% 
  mutate(Group = if_else(Language == "JavaScript" & browser == "chrome", "Chrome and Javascript", 
                         if_else(Language == "WebAssembly" & browser == "chrome", "Chrome and WebAssembly", 
                                 if_else(Language == "JavaScript" & browser == "firefox", "Firefox and Javascript", 
                                         if_else(Language == "WebAssembly" & browser == "firefox", "Firefox and WebAssembly", "nothing")))))

#create densityplot
dp2 <- ggplot(density2, aes(x=consumption, color=Group,
                          fill=Group, show.legend=F)) +
  theme_bw() +
  geom_density(alpha=0.4) +
  labs(x='Energy consumption (J)', y = "Density", show.legend=F) +
  theme(
    strip.text.x = element_text(size=fontSize),
    strip.text.y = element_text(size=fontSize),
    axis.text.x = element_text(size=fontSize),
    axis.text.y = element_text(size=fontSize),
  )
dp2

#create boxplot
bp2 <- ggplot(density2, aes(x=Group, y=consumption,
                          fill=Group, show.legend=F)) +
  theme_bw() +
  geom_boxplot(show.legend = F) +
  stat_summary(fun=mean, color='black', geom='point', 
               shape=5, size=2, show.legend = F) +
  labs(y = 'Energy consumption (J)', show.legend=F) +
  theme(
    strip.text.x = element_text(size=fontSize),
    strip.text.y = element_text(size=fontSize),
    axis.text.x = element_text(size=fontSize),
    axis.text.y = element_text(size=fontSize),
    axis.title.x = element_blank(),
  )
bp2

bp2_general <- ggplot(rq2_data, aes(y = consumption)) +
  theme_bw() +
  ylab('Energy consumption (J)') +
  geom_boxplot() +
  theme(
    strip.text.y = element_text(size=fontSize),
    axis.text.y = element_text(size=fontSize),
  )
bp2_general

############################################
# Effect size estimation
############################################

require(tidyverse)
library(effsize)

ff_data <- exp_data %>%
  filter(browser == 'firefox')
ff_js_data <- ff_data %>%
  filter(language == 'js')
ff_wasm_data <- ff_data %>%
  filter(language == 'wasm')
ch_js_data <- rq1_data %>%
  filter(language == 'js')
ch_wasm_data <- rq1_data %>%
  filter(language == 'wasm')

effsize_language_chrome = cliff.delta(consumption ~ language, data=rq1_data,return.dm=TRUE)
print("Chrome - JS vs WASM")
print(effsize_language_chrome)

effsize_language_firefox = cliff.delta(consumption ~ language, data=ff_data,return.dm=TRUE)
print("Firefox - wasm vs js")
print(effsize_language_firefox)

browser_js_data <- rbind(ff_js_data, ch_js_data)
effsize_browser_js = cliff.delta(consumption ~ browser, data=browser_js_data,return.dm=TRUE)
print("js - Chrome vs Firefox")
print(effsize_browser_js)

ch_wasm_ff_wasm_data <- rbind(ff_wasm_data, ch_wasm_data)
effsize_ch_wasm_ff_wasm = cliff.delta(consumption ~ browser, data=ch_wasm_ff_wasm_data,return.dm=TRUE)
print("wasm - Chrome vs Firefox")
print(effsize_ch_wasm_ff_wasm)

ff_wasm_ch_js_data <- rbind(ff_wasm_data, ch_js_data)
effsize_ff_wasm_ch_js = cliff.delta(consumption ~ browser, data=ff_wasm_ch_js_data,return.dm=TRUE)
print("js Chrome vs wasm Firefox")
print(effsize_ff_wasm_ch_js)

ch_wasm_ff_js_data <- rbind(ff_js_data, ch_wasm_data)
effsize_ch_wasm_ff_js = cliff.delta(consumption ~ browser, data=ch_wasm_ff_js_data,return.dm=TRUE)
print("wasm Chrome vs js Firefox")
print(effsize_ch_wasm_ff_js)

############################################
# ANOVA test
############################################

#create model on which we can apply ANOVA
rq1_anova_model <- lm(consumption ~ language, data=rq1_data)
rq1_anova_model

par(mfrow=c(1,1))

#check normality (might skip this step)

plot(rq1_anova_model, which = 2, add.smooth = FALSE)

anova(rq1_anova_model)

#RQ2 anova
rq2_anova_model <- lm(consumption ~ language + browser + language : browser, data=rq2_data)
rq2_anova_model

par(mfrow=c(1,1))

#check normality (might skip this step)
plot(rq2_anova_model, which = 2, add.smooth = FALSE)
anova(rq2_anova_model)




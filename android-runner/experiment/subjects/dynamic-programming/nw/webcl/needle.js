/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014, Erick Lavoie, Faiz Khan, Sujay Kathrotia, Vincent
 * Foley-Bourgon, Laurie Hendren
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


Math.commonRandom = (function() {
    var seed = 49734321;
    return function() {
        // Robert Jenkins' 32 bit integer hash function.
        seed = ((seed + 0x7ed55d16) + (seed << 12))  & 0xffffffff;
        seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;
        seed = ((seed + 0x165667b1) + (seed << 5))   & 0xffffffff;
        seed = ((seed + 0xd3a2646c) ^ (seed << 9))   & 0xffffffff;
        seed = ((seed + 0xfd7046c5) + (seed << 3))   & 0xffffffff;
        seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;
        return seed;
    };
})();

Math.commonRandomJS = function () {
    return Math.abs(Math.commonRandom() / 0x7fffffff);
}
function rand(){
    return Math.abs(Math.commonRandom());
}

if (typeof performance === "undefined") {
    performance = Date;
}

var CHECK_ACCESS_BOUNDS = false;
var expected_aligned_seq_1_chars = "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------BADAHHAJC-BHBJJC-I-G-IHJCE--HB-IABD--D-GBHC-C--A----AJGHCEJI--DJICGJ--EJIHFFAJGBJGBDJB-CIA-D-AHE--AIJ-G-F-FAJEJH--IB-EJ--IBEBE-GGAAIJBBD-I--AE--DJJ-G-EDFGD-HGB--G-IJG--FIIID-G--J-B---C-I--H-BCGGHGHHHAJ--IF------I-----CG-G-CG-----H--F---E--GDI-F-FIFB-DC---BEDCHBGDE-BFE-J--GAAAAAGAGDCDECFGCBE--GIEA-GB--CDAJACFI----I-JDAFJJ-----FCC--CJC-E-GDCBBDDIDBG--HDDAFJIDCDC-----HEACCIDBJHJGFGC--CA-IIB-DFE-FEE----I-FBC-IGAAH-GHBJFJH--HIABHFB-E-EDG-----EE--HIBA-BJAHGBJ-IDE--EAEABGHFDAAFBDG-CG-GJAEEG--A-G--ACEJ-E-GIGCH---DA---F-JCCGF-HFI-EEE-C-HICHJBEFIHBJFADHBEC-AH-HGGD---AA---B--E--AHJGJ-BH-ICA-FJFHJ---JHFEAIAJGCI------I-GF-FJE-I-I--CIDGGEABGAAAD-BBGH---DG-JBBCCI-J-I--BDIE-H--AF--CDCJHDC-FHB--IHCEAJJC-BDEEBDBA-BH--E-C-CDDFJGCGCDGHB-GHBAJCBI-FGH-HGDD-EIBCIIE-CHEIAHE--CJAIFAIBGIJ----AD---ICHEFB-F-IGGBE---GD-BJA---DH-I--ADJECA-F--BFAHCFE-JAIEGBEI-EHIF-A--AIBCG--IGCAH-HJEBBBH--D-IAEFFFEHJ-B-I-G-C--D---FC-H-FGBA------H-DB--HAJ---CFFB-EJ---J-FJJ---EC-JBIC------D--FBCJ-BIF---ID----DJCE-CI--FIAE------A-JDGE-EIC-ADDDHADDJDHB--GF-AEGHGHIIIDFFHFFE-AFA--GEC-C-IACCHHIJHCGJ-CGJ-B-GE---CIEA-HJGAECC-IGAGJF--DCDAGCJFAEIIDA----A--HE------EG-IB-EE--EJ--BIGG-GDFJEEHAIJCDBFGGFFCH--GHJFBBBFE---A--ADBJ-BEHACI-IEFF-BD-FJHAIA--D-DBE--I-HHCIBAGJCGB-J-CHH-B--IBFAB-F-ADJHHD-EC-I-IGCG-DAHGIG-GAHDIBCF-FFJDDDABDFEBIHHEGFI--GICD---DAH--EH---H-FJJ-H-I---A-HCFFACFGBFCC----BHHFFJE-BFGCD-G---HHAHHJ--H-HA-HFDGBDFE--CBG-F-DAJ----GEBHFBIA-DF---EHDIJH-E-DH-AH-HJC-ED-ADIDADFAJFAFFHAAHGHI---CJJEFDB-CJ--A---EBHE-F-DGABIIHFCFBHE-A--E-EAABIAIC-FCAEEDJHB--CAJE---I---I-DC-H--J---EGD-IGDJGJFAJ-FCIJEFB-HI---HHJ-----F-DHGFAABG--I-H-HBIH-BIECD-IDGEBE-IGCFF-IJ-D---DJ-C-CJHBDFJGEE-IGBADHF-IHHIGFBFIDIBDGFHAFH-BFJICBDAGF-DFAIBGJFBDEGHAIGE-DEADCEAJDH-E-ICJAGCIIEDBJF-DJFEGGGDC-IGBGJAIAEGFEJFH----EI-DAA-GI-EGGCFEE-FEHHHB---B----B--G-HE-E-H-JBF-D--H-----H-F--FE-HJDJFCJIA-A----E-CE----ECHE-IJ-AJHBGA--BFCBFBHCAAGH---GII-B--B-D-G-H-ACGEJ--EDIGGJDBC---G----BBAFBJEJCAJDC--HHGDCCJ-DJAH-CGH-JDEJC-H--F--EDDDEJCAABJ-----A-H----JBCABFHIHDHFJBB--JDH-CAJ---GE-E--B-----C-GIDDAHJEG-BA-CBDDJCEAFBDGH-AICIDAE-HAGHJABBGIEDJEGFJ-DD-F-GB--CDHHFADEJEHHBC--A-B---GE-DG--F-BFDAIE---AE-DEEAIBJFBCCB--AFADH-E-FBHEFH-DFDFJAEEAGBIE---DDJ-A-IACCIFFC-CBI--IFJA-DDIF--DGE--HG-HIFIGA-J------CHJ-EJ-AHDFE-D--JHG-DHDJCGB-CJE-DFD--------AEDAHFCBIEBICGDH-CDHE--GG-AIEJFFJFGBF-CHDJBAGH--I-FGAHAHAAJ-IEIEEJJEE-D-B-I-CAFEHBFIJIEGCEEADGEDJ--H---G-ICCDGCDJDBJI-HJ-----ECEHICE---D--E-CHC-G-J--BFDICBDBF-C-DCD---H-----G---J-BB-H-----------------G-D-EHDGFCHCJ-FA---IIDAGIAADFHDEDGE---I--HBJAICBFAFDCACFJF-FGC-I-ABBA-CFHG--HJADAGCHGCJJGJIIJABCACHD-CIDDI--FB--ADEHF--ID-BBFCHJ-AACEHBGJFAFBDFFAFBEBCHHA-CDDEIDAAGJEIHHCJIFDAJCB-GIBHBEIHDFJGHEAGE----EFADGJ-GJHGGFBEBBEJHCGIGHHHDFBFCJDAI-BIDJ--IJGGBACAHHCHGI-CHGIAFB-G-JDBA--HHAJ-BAEE--I-ABCA---FEJCFAHGJDDJDI-BA-IG-G-IIAD-DIHDHAGGJFFFCAJEJFJA--H-FDEAAEHAAE-EDF-ADIJICFDAFAAGJEEJEEC--IFJ-CFDGJ--BAHBDE-AHF----AHAJBCHAAFD-HH-C-FBD-B-FCDF-A--B-B-I-ADFGFIBCB-JIAEF--CGCCG--IGDDHDIJCDBJIFEB-CIBI--D-DA-F--E-FE----JJ---ACDDBJADEEAAEEGGI-HEJJHFC----H-GGE--DFD-IECID-A---F--GEDAJABDJFD-B-DFC---E-IICGFFBED-BHIBADDIGJ--FBI-CFJDDGHHIGIGH-I--CC-BAF-CFGFCAAHBEDDEDGJCCDFDJJC-HCBHEGJBCJI---AHGJJFCICF--AIDDECADHAG-CIHDDHBCDFDIAJDGGIAEJ-IIBIHHJ-IDHJBFDDFDICBJEFHGEHEAEHHJIJFAHD-EBAFFBBGE-F---ACGDCE--IFJ--HBDAAJCHBCIADHC----C-H-E----DJ-JEGA-FDJBJBJJJIBAEJ-CJ-HJ-C-HI----EHIFDDE-CJAJCD--HCADHEICIIEFJJ-C-CC-C-IBEF-I---B---IJ-A--EJBBGJGIBC---FCCIB----G--FJHBAD--HCGBBEEABEFFIGABHI-DAGJBACDAGCIAHJE-FBIIFGGIJ-EBDJADJIECF-DGAAGEAJDBIBGB--I-F-EBG-HIBHHBG-----A---G-FHAH-DAD-FDC--AJEGIJHJ--GED--IEJIGBFGCEEB-AIAIE-DBE-HFJICGDH-HFI-EGCFBJJAJAIFDE--D--EHCD-DDEICG-FCCHABDFAIDEFB-AABCG--GEHGHJ-BFAIGCCGEFDHCGBDGIBHCJFEJCIGBHDDGIHHEFJDBEFE-DAGCAFGCDJEFA---I--EB---GGH---E--E-I-E--D-CHCEFJGAIDCFD--IJ---GDJ-GDEAD---D--EFJBEBEDGFCFAFB---IDGFDEHCGFFDCIEABFIBJBICIEDHCFJBJJEJHBHFJBACICEDGH-IBICDCHCDIBJHDEDGGFJAACA-GEIBCGGJCHCIHHGCJFHAHE-GFEAGGBCI-FGGB---I----B-HFGAIJCBJIDBIIJCJIHDAABCBDFBE-EFFGFGI-HGGHGHBDFEB--DD-D--EADBCFAHDFIHECICCBHJAHHCJIBEFACFCDJA--EGDG-GABGGJFIIFGBJCJFCHBHEJHFCHADFGGACGIBC-CBAAI-IHCDGDBJDHEIEJHDBHCHADEC-DIGFF--I-DHJ-AGE-J-FGJ-----E--CG-BAFJB--I-EFFCHGJ-BCFCB-CCIED---B-AEGF---FJ--C-H---GEJHDFFIECF-D---AG-------E-FGIAFDAH---JF--B---I-H-B--JCD-----G-HB--BHEJ--E-E-E-A---BEJGB-----DIA-DAIHFHGFHBEIJEFFDHGGEIJGCCAGGGAH-D----BAI-DBC-ICHIJBH-DAJEFDB-HIIIHEHE-DIABHG-GFIEBA-IBFB-HCAJHGCF--GIJG-IGBFCHADFGCICJGEAHJIFGCIHAGFCCEJC-FCEDECBH-JF-EGFCDHJAJBJCHDC-A-BHDDJBDFGDFDGAI-H--BJBBCCE-EFBHCAFCDGJDCCHCEDGCJEEFHHCGJAHJFFECBFFBIEICI-CHD-ICGCJCGCHB-JHEFBAEJHEDJGI-AI-JIB-CEDFHAHGHH-E--DE-EGEHCHI--HAH-DAIA-BE-CFDIGHAEJ-EDIGDBAJAJ---H----B-AFFHG--FBGECJJJHFBAEFJBHHCGHDBHB--BDECEDADJDIA-EHIEAGFFCAJ-GIACB-JE---GGI-BDIBA----F--GI-A-H--CFCAAIIEAEJGDC-B-BIGCHAE-JAICABIJD-JDEEEAAFIFE-JEAHDDCACDFJEFDECABIJFACBCHEGI--E-EHF-FHAFGJDDGEHDFHHABJDBGIDHJFIACAFBIBAHG-GGEIG-GC-CDFBHCCDGFHJDIACJ-HJABAJDEEJIH--HJA---DJG---F-E---F-I--IBE--GABIECCBCGEADHFAJE-JEBI-BJDCAIDHAAIFE--BCDGIGJDJJAEA----EJDG-IHFIJEHFGCBDEJDE----GHGFEC-CF-FIGIJIADH-EIAEHADIAGIHHHBJ-DJGCDHABEIGBBG-EFDIBFAEDAFACEGABFEDFJ-HH-AEBHIBHJIBCEFJ-JEHIFJCBAEI-G-ICBADAAJACIG-E-BABDGIEJIHHAGJC---JGG-HCIGHAE-FAAHF-HCFG--CABFFDGFAEFJJCJJAABJFBGFCB--DHEAJACEDCEDBE-CF-E--D-EGHDJEHACDGIBHGHJHAG-C----EJGAJHIGFE---GHEBFJCBGCHBDBIBDECAEJEDHDADGBGE-----J--EH--CHAD-IGBAB-HIHGEJDDCHF-AA--F-D-J---JHB-IJ-BGGEDHDFBAHF-DCDAAHFDAHGID-GEED--AAEB-GJCBJDFAAE--G-AAJDIJ-FGB-E-CDDICEGAJBBIEIBF";
var expected_aligned_seq_2_chars = "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------BGD-----CEID---DFIJGFI--BEFJGBFI-GDFGGJGFFIGIFFADEHBAEG-DE-IFBGJHCGABHE--HDGAEG-J-BHJGHC-AFDFE-EDHAI-FGEFDBG-E-HAGIBIE-FFI-EFEHFCAA--FBDEICBA-IHDAJIDCE-FI-JH-BFAFHC-GJJF-IFDCGACJEAEEJCAIBDHFFCBGHI---IJCDIFEEEIHAIDHCJHCBAFACFHJIHHHDEGAAJEACGD-JFJB-GBAGCEEABE--H-FIEAB-EFJCIG-CIAA-HIDCC-C--CB-FIGI-AHGBFEC-JJHBBIBDCJIDJD--JJIHIDEIDCJJCJIFEABD-BCCD-DBGFEDDDHF-GDDDDHGGHAHE-------HJ-BG-JJAAHICAHD-AHBAECDIIIGGBCBICHACED--J-JHJAHI-B-IIAEDEDGFCFIJEEJGHCCAIB---GCJEIDEIFJA-GBDHB--HF--FJI-JFJF-EGCBAHFIIACEAGEDGHGAHABBDGDIDFGJ--GFJFFBJJEEGDGIIDDJ-E--HB-CAD--ACFFHCCDDDCAIAAJJJBHAEJHAHJD-FBHDI-ADB-FAJEGDAHDEADA-G-IBHHFEBCDGFBF--DIDFDJCI-GDEAAG-AADIFBDAJJBDGDJ-F--IAJEIFFB-CAFHBIBFGJCDGJ-DDEF-BAGI-----JCIB---BGHAJCHBCEACBFDDF---FC-GHBEFD---CBICF-HJAB-BJEI--IAEFBFEB--EGHC--I-AI-FIJCFGCBDGBCIAAE--EFJI---EJCHBDFFJHICCDAIIHFA--EGACFCGGFG-DF-GJA-EDBEFHEACFGAEJA-ACDHBI-C-HFH----CHAJCJIA-GFI--JIFIIFDICJJDJJIGGEHEIG-AJJHDDIHBDBFIHA-FCHCFGBGEJFBHJCCJJADHECHJB-CBFFDHDDGIFAIJGGFFCHDIDAEBGD-DEJCIHAII-EAGJGBAAFJDIECE-DEAHFCCA-GJ-HCAACFDA-D-G---IDDADDIEDABAJBFJCACBIEGCHAI--CG-BCGJDBAAEDDDCDAAGC-G-E-BEI-AF-BEHDHDEIDJ-HE-IDAGBJEEJFHEADHCJFEGFFBCEEIFEJFEB-DGIG----EHJ-JH---GD-GCHIJG-J----AEDACABJADFJAAE---IAGEGFIBDBF--EIACBGFD-EJFIFDH-IHHF-CGBDEIC-AEBEGI-FABEFBA-J--DBE-EIHICCCJD-CD-DCBAHCBBGFBFF-----BH-EBI-HE--IHCDIBDABIDBHFJAHJBCHAC--DHJIJBBAJHI-FA--G-ICCAJBJBHHIC-EGBFBIDFGIIBBH-DHJGBAFIAIH-DG---EHDCFGFFBD-JHDDIG--H--IJDDFAIBE-G--AEECD-JAHEH-CEEDGA-I------BEIB----G-IJEHC--EIDBFDJIBAJGIE-DEIIJGFA--IH--FBH-GADFJDEFJGI-GCBBI--E--HBEAC-JEGHJICFBIAGIGHGAJFDAE-DAI-C-F-F-JBFCI--HBDDIEAJHCJAABABFGGHG---BGDHFHHJHF-HDFI--DAHDFE-EBID---JIJGGAEHDJFCAC-HB-----EIIDB---FJB-HIG---HG--D--HAFGEB-J--BFA-FHD--I-G---GE---BGEBDE--I----HBEAI---G-FI---JFJCJ-E-FG--JI--DJ---E--E--HJDJJEIGGHHGGIHA-GCF--DG----BAIJBGJFGBJJFCHECEDHFJAFIDAGHDBAFGHCFBDG-BHADJF--BABAGHIDEGC-CGBCEGHAGI-CA--FGAEDBG-BGBH--AGHJFAGICABFFBADBGFDBFCG--HIE-I-GJ--CHIEFEIEIFBJIBJE-C--ICIBABG-HCJBG-EHFBFHFJHEECBHEAFCDEDIDEJ-EAB-IGGGCEIHAGAIJCC-FF--HFHF-IBJEJGHFCF-BFDGEGEHHFAHAAACAFADD-H--BHBADC-DG-H-A-BDCHJEI-ID--IH--H-A-AII-G-AGGJIDCJGEGBIECIIAF-DEJECAACFJEBBHFGGEBHGAAFGBI--IEDDCAJHD---I--FA-C-EEAGA--JECF-CA-HJDDDD-A--A--IEJCIDCAFAEIA--IDHCHIAIAFIF-AJGD-FBBFFEAFHDACI-IDHDJGGGGDDDHJAE-ICHC-EJDBCJHGJGA-JC-IJC-EGGFGFIIIFEFJAE-A-F-FGA-IFBDHCCGHEHBDGBAI-----FD--EC---B--HEJICFG--JD-AJBIEI-----ACDABJDJCA-E-B-I-I----E-DDECJBCHFJJGHI-GDGBBA-BJIFCJCDFBCEBE-I-EGCJDBGEBC-GEGBJFDFFDICI-FGECAGCFAAJHAAFFFGIJAJGCBEHEECAACEGFFFGJFJGBGDDFE-DD-I-IJGFAEDBIIFBCIAFGGGD-DG-IIIIGHHAJFIC-DDFHCHHB-FEF-CAIGACFAICG-GBIGEA-AGCHDC--BEII-AIHAIH-EBIDAICCGBCHAD-HFAJI-JIGIC-JBGAC-CAG-G-GBH-FJG--BG-AAJC---I----J----CJ-B--J-BFDIHHBE-A-F----A-EIBIHE-AHHJFG-HAGF---HE--I-IG-----B-----IGCID-HGIJ--BADJ--B-GIJC--I-G-EGCJCFEFGHHA-FB--EBIIHA--AJJFFE-HF--G-FGEGIABBDBGFGEGI-DGGI-----GJ--F---E-G-HIBHCFG----HBAEAE-FGGDF-I-FG-F--BJ--J-EIHAI--HCB-G-HBBFHBCECA--EEJJA-A--C--A-DJHHDCAF-DCBJHCC-JAEEGJCHCJEDF-F-ADFHA-AEGJAC-CCFJCI---A-IE-D-JI-EBJBIIIFJGIGJCBHJEAIEJDIFJJIAFAC--F-AD-JJH-E--IBHE--H-CBJBBHBBGEGJGFGJB-CI-JABFFFCCGE---HB-JCCJCJD-CJEEEACCC-FFHEDBBH-GJCD--JCBGBIGC-ECD-ACICI--JIFACCJIHFJC-D-I----E-HED--CCGI---CEH--H-D----IDFAAAG--FGIHIJEEI-GEIH-HJGFC-HDG-GC-FH-H-GGDC-E-FGIBICC-DI-H--CDCFBIABJ---G--JAE-A-I-F--CJEDDCFBBG-GGHHHAC--CEAHIF-DDHFGAH-HH-CIBFHCFBFAIHHJAFFGBDAGJEGECF--F-F---GHA--FC-GH-GCDHGAAHHAHC-GGEGD--JCGBIHCAF--I-ID-B--HDADCACEI-EFHGHJHGHHJIJBAHDA--BHJ-I-CHJBBCIIBHHEHGHJF-CB-DIBH-DFAEE--E-F-D---IEDH-J----EG--A--ECF-GIFGBBJCEI--HH-IE-BHDD--G-----C-GBDJIFFCE--JA--HH-GCCCCJEJDCDJF-ADGDCDCGDCFHAAEGB-A-BDG-GBBIE-I---DCJE-JH-AI-HGBEBHB-IAGDCGHBCJE-CD---EJ-IA-EAJDIGE--DBAD-II-EB----B-F-ID-FFCAA-HDJJAE--HJEBD--GCCG--D----DGGB---B--BI--HDAG--H---DCEC-ID-FCA-CCD-EDAGEHIABEFCJCICHIAFEBIEIIAEGCDBCCCA--GA-AC-DHHIJIIIGHJEGDECDBFBDBEEF-B-BED-BCCH-BJAHI---HEICG-GG---A-FI---IAI-BHGF----E-AFHF-BHC-F-DDAJCB-CDI-C-IGEA-ED-DB--HHEJGEFB---J-----H-C-F--HEJIF----IIIJF-BBIAAIEAHFBJHBDHIJCFJ--B--J-JG-D--B-B-FFEJE------EA--H-H-DG-BCHGDIDBHEA-B----D-C-E---CBH-A--BJ--E-J---D-AGIE---JG-BAFJG--FD----FD-G----IC-ADBGDA---BFJFBAGIBIHC-----DHEDE-----C-EFEAJDI-FFJAAED-JCEGEFJAGG-GHGHHEJBBFABA-ABEIIJE-FC-F-FB-GCBEDBI-DGAIBGAE-FDAJFJIBIAHCICIE--DCG-EHFHDJJJAGCDAIEEEEDFHI--D-HIJIJFAABJCIIGCGFAIJCDEECEEGIIBGFBHE-HHEIEAACAFJGBE-FBAFECCDFAFD--H-HGG-C-I--IFDH--EC-GCFHFGDECGDHAEAFAIGD--JIIH-JB-JD---F-FJHIFGH-AJIDC-B-GJGDIE-AEFFFBAHC--HF-FJBG--GDI-B-C---BG--BJ--A-----C--AGB-DE-CHF-ED---HGJFCE--ID-JA-AJ-H-IEAGB--DJ-D--HCDG-IFAFFBJDB--EDE--H-H-ID--DFC-FED--JAE-----J--J---C-GD-IE---ECADFI-----D--BIJ--G--E-HED--IEA-EJI-JCE-I-E----JEJBDEBAG--CFIFBDEHEDBIBDBEGBFCC-C-E-IE--G-B-J-JCCBHFCJIBIJFFAGAJG-G-C---IF--E----CCG----BJJBGEGECA----AFECI--GFGCJJHG--HBGJEHHFFGICBHBBABCJHGJAGICGDHGABBCGA-I--E-GFCEBDB-GC-A-DJ--CA-G-DHAD--E---I-EGJ---------BJEF-------FA----EGCJDEJE-FGF--FBAIC-E-D-----JD--I---BI----B-BJH-JFF-CBJG-JC---H-B-G-H-CB-CJBHJ-FA--EEECDBGH-AFGDDJFAAHGHEGDCFAIDHI-EACGIFIE-CB----D-CA-EBJAHIHB-DFFBD--AIHEHAB--GIF-----EAHJCJE--GBIGFC--H-AC-CE-CEHBIBGHGB-CHC-EF-D--I-DCGEI-E-GD---IHDA--DDJGHD-AG-IFCB-JE--I----D---C--HBF--F-GCCIA--H--H---C---HJEHAF-CG-ECFFJI--A-EA-HCIGHECFA-DF-EEB---FJCFEEJGGFDBI--AEIG--HDAHI-IJJIA--F-GF--G------A---BGG-BEGDHE--FHE--E-FEBC-JEBFDFE---J-H-C-G-F-GH-H-DHCEBEHEJDA--I--EBJFFH-BF-C-G--BD--B-AFA---CH-H-GB-EJBFJJJFBEHIEC-ADBIAB-BGDIH-EA--C-FIAEBIGCGCJBIDJHBAI-FB-BE---FBAHBHCCIAEBBD----DJG-JGJBGFEBIF-BBADBDAEDBGFAFJHI-HFFBDEFC--BB-GA--B--I--";

function maximum(a,b,c){
    var k;
    if( a <= b )
        k = b;
    else
        k = a;

    if( k <=c )
        return(c);
    else
        return(k);
}

var blosum62= new Int32Array([
     4, -1, -2, -2,  0, -1, -1,  0, -2, -1, -1, -1, -1, -2, -1,  1,  0, -3, -2,  0, -2, -1,  0, -4,
    -1,  5,  0, -2, -3,  1,  0, -2,  0, -3, -2,  2, -1, -3, -2, -1, -1, -3, -2, -3, -1,  0, -1, -4,
    -2,  0,  6,  1, -3,  0,  0,  0,  1, -3, -3,  0, -2, -3, -2,  1,  0, -4, -2, -3,  3,  0, -1, -4,
    -2, -2,  1,  6, -3,  0,  2, -1, -1, -3, -4, -1, -3, -3, -1,  0, -1, -4, -3, -3,  4,  1, -1, -4,
     0, -3, -3, -3,  9, -3, -4, -3, -3, -1, -1, -3, -1, -2, -3, -1, -1, -2, -2, -1, -3, -3, -2, -4,
    -1,  1,  0,  0, -3,  5,  2, -2,  0, -3, -2,  1,  0, -3, -1,  0, -1, -2, -1, -2,  0,  3, -1, -4,
    -1,  0,  0,  2, -4,  2,  5, -2,  0, -3, -3,  1, -2, -3, -1,  0, -1, -3, -2, -2,  1,  4, -1, -4,
     0, -2,  0, -1, -3, -2, -2,  6, -2, -4, -4, -2, -3, -3, -2,  0, -2, -2, -3, -3, -1, -2, -1, -4,
    -2,  0,  1, -1, -3,  0,  0, -2,  8, -3, -3, -1, -2, -1, -2, -1, -2, -2,  2, -3,  0,  0, -1, -4,
    -1, -3, -3, -3, -1, -3, -3, -4, -3,  4,  2, -3,  1,  0, -3, -2, -1, -3, -1,  3, -3, -3, -1, -4,
    -1, -2, -3, -4, -1, -2, -3, -4, -3,  2,  4, -2,  2,  0, -3, -2, -1, -2, -1,  1, -4, -3, -1, -4,
    -1,  2,  0, -1, -3,  1,  1, -2, -1, -3, -2,  5, -1, -3, -1,  0, -1, -3, -2, -2,  0,  1, -1, -4,
    -1, -1, -2, -3, -1,  0, -2, -3, -2,  1,  2, -1,  5,  0, -2, -1, -1, -1, -1,  1, -3, -1, -1, -4,
    -2, -3, -3, -3, -2, -3, -3, -3, -1,  0,  0, -3,  0,  6, -4, -2, -2,  1,  3, -1, -3, -3, -1, -4,
    -1, -2, -2, -1, -3, -1, -1, -2, -2, -3, -3, -1, -2, -4,  7, -1, -1, -4, -3, -2, -2, -1, -2, -4,
     1, -1,  1,  0, -1,  0,  0,  0, -1, -2, -2,  0, -1, -2, -1,  4,  1, -3, -2, -2,  0,  0,  0, -4,
     0, -1,  0, -1, -1, -1, -1, -2, -2, -1, -1, -1, -1, -2, -1,  1,  5, -2, -2,  0, -1, -1,  0, -4,
    -3, -3, -4, -4, -2, -2, -3, -2, -2, -3, -2, -3, -1,  1, -4, -3, -2, 11,  2, -3, -4, -3, -2, -4,
    -2, -2, -2, -3, -2, -1, -2, -3,  2, -1, -1, -2, -1,  3, -3, -2, -2,  2,  7, -1, -3, -2, -1, -4,
     0, -3, -3, -3, -1, -2, -2, -3, -3,  3,  1, -2,  1, -1, -2, -2,  0, -3, -1,  4, -3, -2, -1, -4,
    -2, -1,  3,  4, -3,  0,  1, -1,  0, -3, -4,  0, -3, -3, -2,  0, -1, -4, -3, -3,  4,  1, -1, -4,
    -1,  0,  0,  1, -3,  3,  4, -2,  0, -3, -3,  1, -1, -3, -1,  0, -1, -3, -2, -2,  1,  4, -1, -4,
     0, -1, -1, -1, -2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -2,  0,  0, -2, -1, -1, -1, -1, -1, -4,
    -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4,  1
]);

function to_char(i) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (i<-1 || i >= 26) {
        throw new Error("ERROR: Invalid conversion to character value, integer '" + i + "' out of range");
    }

    if (i == -1) {
        return "-";
    } else {
        return characters[i];
    }
}

function to_int(c) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (c == "-") {
        return -1;
    } else {
        var index = characters.indexOf(c);
        if (c < 0 || c > 26) {
            throw new Error("ERROR: Invalid conversion to int value, char '" + c + "' out of range");
        }
        return index;
    }
}

var max_rows = 0;
var max_columns = 0;

if (CHECK_ACCESS_BOUNDS) {
    var input_index = function (row_index, col_index) {
        if (row_index < 0 || row_index >= max_rows ||
            col_index < 0 || col_index >= max_cols) {
            throw new Error("ERROR: out of bounds access row_index: " + row_index + " col_index: " + col_index);
        }
        return row_index * max_cols + col_index;
    };
} else {
    var input_index = function (row_index, col_index) {
        return row_index * max_cols + col_index;
    };
}

function to_int_values(s) {
    var a = [];
    for (var i = 0; i < s.length; ++i) {
        a.push(to_int(s[i]));
    }
    return a;
}

function seq_equal(seq_1, seq_2) {
    if (seq_1.length !== seq_2.length) {
        return false;
    }

    for (var i = 0; i < seq_1.length; ++i) {
        if (seq_1[i] !== seq_2[i]) {
            return false;
        }
    }

    return true;
}

var expected_aligned_seq_1 = to_int_values(expected_aligned_seq_1_chars);
var expected_aligned_seq_2 = to_int_values(expected_aligned_seq_2_chars);
var max_cols = 0;
var max_rows = 0;

function source(id){
    var programElement = document.getElementById(id);
    var programSource = programElement.text;
    if (programElement.src != "") {
        var mHttpReq = new XMLHttpRequest();
        mHttpReq.open("GET", programElement.src, false);
        mHttpReq.send(null);
        programSource = mHttpReq.responseText;
    }
    return programSource;
}
function program(ctx, src){ return ctx.createProgram(src);}

function build(prgm, device){
    try {
      prgm.build ([device], "");
    } catch(e) {
      alert ("Failed to build WebCL program. Error "
             + prgm.getBuildInfo (device,
                                            WebCL.PROGRAM_BUILD_STATUS)
             + ":  "
             + prgm.getBuildInfo (device,
                                            WebCL.PROGRAM_BUILD_LOG));
      throw e;
    }
}

function webCLPlatformDevice(platformIdx, deviceIdx){
    var p = webcl.getPlatforms()[platformIdx];
    var d = p.getDevices(WebCL.DEVICE_TYPE_ALL)[deviceIdx];
    return {"platform": p, "device": d};
}

function webCLContext(device){
    return webcl.createContext(device);
}

function isWebCL(){
    if (window.webcl == undefined) {
          alert("Unfortunately your system does not support WebCL. " +
                "Make sure that you have both the OpenCL driver " +
                "and the WebCL browser extension installed.");
          return false;
      }
      return true;
}

function kernel(kernel, program){ return program.createKernel(kernel);}

function printM(a, m, n){
    console.log("Printing Matrix:");
    for(var i =0; i<m; ++i){
        console.log("[" +
            Array.prototype.join.call(Array.prototype.slice.call(a, i*m, i*m + n), ",") +
            "]");
    }
}

function webclNeedle(platformIdx, deviceIdx, dimensions, penalty, options){
    var programSourceId = "clNeedle";
    var blockSize = 16;
    var intBytes = 4;

    var default_options = {
        nb_possible_items: 10,
        print_results: true,
        print_intermediary_results: false,
        use_parallelizable_version: true
    };

    if (dimensions === undefined) {
        dimensions = 4096;
    }

    if (penalty === undefined) {
        penalty = 1;
    }

    if (options === undefined) {
        options = default_options;
    } else {
        for (var n in default_options) {
            if (default_options.hasOwnProperty(n) && !options.hasOwnProperty(n)) {
                options[n] = default_options[n];
            }
        }
    }

    var penalty,idx, index;
    var size;
    var t1, t2;
    var i,j;

    max_rows = dimensions + 1;
    max_cols = dimensions + 1;

    var aligned_seq_size = 2*dimensions;

    var reference = new Int32Array(max_rows*max_cols);
    var input_itemsets = new Int32Array(max_rows*max_cols);
    var aligned_seq_1 = new Int32Array(aligned_seq_size);
    var aligned_seq_2 = new Int32Array(aligned_seq_size);
    var input_seq_1 = new Int32Array(max_rows);
    var input_seq_2 = new Int32Array(max_cols);

    for (i = 0 ; i < max_cols; i++){
        for (j = 0 ; j < max_rows; j++){
            input_itemsets[i*max_cols+j] = 0;
        }
    }

    for (i = 0; i < aligned_seq_size; ++i) {
        aligned_seq_1[i] = -1;
        aligned_seq_2[i] = -1;
    }

    input_seq_1[0] = -1;
    for(i=1; i< max_rows ; i++){
        input_seq_1[i] = Math.abs(Math.commonRandom()) % options.nb_possible_items;
    }
    input_seq_2[0] = -1;
    for(j=1; j< max_cols ; j++){
        input_seq_2[j] = Math.abs(Math.commonRandom()) % options.nb_possible_items;
    }

    if (options.print_results) { console.log("Computing dynamic programming results"); }

    var t1 = performance.now();
    for (i = 1 ; i < max_cols; i++){
        for (j = 1 ; j < max_rows; j++){
            reference[input_index(i,j)] = blosum62[(input_seq_1[i]*24) + input_seq_2[j]];
        }
    }
    for(i = 1; i< max_rows ; i++)
        input_itemsets[input_index(i,0)] = -i * penalty;
    for(j = 1; j< max_cols ; j++)
        input_itemsets[input_index(0,j)] = -j * penalty;

    var t1 = performance.now();
    try {
        //============ Setup WebCL Program ================
        isWebCL();
        var pd = webCLPlatformDevice(platformIdx, deviceIdx);
        var ctx = webCLContext(pd.device);
        var src = source(programSourceId);
        var prgm = program(ctx, src);
        build(prgm, pd.device);
        var queue = ctx.createCommandQueue(pd.device);

        // ============== Initialize Kernels ================
        var needle1 = kernel("needle_opencl_shared_1", prgm);
        var needle2 = kernel("needle_opencl_shared_2", prgm);

        // ============== Setup Kernel Memory ================
        // memory has to be allocated in terms of bytes
        size = max_cols * max_rows;
        var clReference= ctx.createBuffer(WebCL.MEM_READ_ONLY, size*intBytes);
        var clMatrix = ctx.createBuffer(WebCL.MEM_READ_WRITE , size*intBytes);

        queue.enqueueWriteBuffer(clReference, true , 0, size*intBytes, reference);
        queue.finish();
        queue.enqueueWriteBuffer(clMatrix, true , 0, size*intBytes, input_itemsets);
        queue.finish();

        // ============== Set Args and Run Kernels ================
        var localWorkSize = [ blockSize, 1];
        var globalWorkSize = [0, 0];
        var blockWidth = Math.floor((max_cols - 1) / blockSize);

        for(var i=1; i<=blockWidth; ++i){
          globalWorkSize[0] = i*localWorkSize[0];
          globalWorkSize[1] = localWorkSize[1];

          needle1.setArg(0, clReference);
          needle1.setArg(1, clMatrix);
          needle1.setArg(2, new Int32Array([max_cols]));
          needle1.setArg(3, new Int32Array([penalty]));
          needle1.setArg(4, new Int32Array([i]));
          needle1.setArg(5, new Int32Array([blockWidth]));

          queue.enqueueNDRangeKernel(needle1, 2, null, globalWorkSize, localWorkSize);
          queue.finish();
        }

        for(var i=blockWidth -1; i>=1; i--){
          globalWorkSize[0] = i*localWorkSize[0];
          globalWorkSize[1] = localWorkSize[1];

          needle2.setArg(0, clReference);
          needle2.setArg(1, clMatrix);
          needle2.setArg(2, new Int32Array([max_cols]));
          needle2.setArg(3, new Int32Array([penalty]));
          needle2.setArg(4, new Int32Array([i]));
          needle2.setArg(5, new Int32Array([blockWidth]));

          queue.enqueueNDRangeKernel(needle2, 2, null, globalWorkSize, localWorkSize);
          queue.finish();
        }

        queue.enqueueReadBuffer(clMatrix, true, 0, size*intBytes, input_itemsets);
        queue.finish();
        clReference.release();
        clMatrix.release();
        prgm.release();
        needle1.release();
        needle2.release();
        queue.release();
        ctx.release();
    }
    catch(e){
        alert(e);
    }
    var t2 = performance.now();

    var aligned_index_1 = aligned_seq_size - 1;
    var aligned_index_2 = aligned_seq_size - 1;

    if (options.print_results) { console.log("Trace solution back"); }

    for (i = max_rows - 1, j = max_cols - 1; !(i==0 && j==0);) {
        if (i > 0 && j > 0) {
            var nw = input_itemsets[input_index(i-1,j-1)] + reference[input_index(i,j)];
            var w = input_itemsets[input_index(i,j-1)] - penalty;
            var n = input_itemsets[input_index(i-1,j)] - penalty;
            var n_limit = false;
            var w_limit = false;
            var traceback = maximum(nw,w,n);
        } else if (i === 0) {
            var n_limit = true;
            var w_limit = false;
        } else if (j === 0) {
            var n_limit = false;
            var w_limit = true;
        } else { throw new Error("ERROR invalid trace indexes"); }

        if (n_limit === false && w_limit === false && traceback === nw) {
            aligned_seq_1[aligned_index_1--] = input_seq_1[i--];
            aligned_seq_2[aligned_index_2--] = input_seq_2[j--];
        } else if (n_limit === true || traceback === w) {
            aligned_index_1--;
            aligned_seq_2[aligned_index_2--] = input_seq_2[j--];
        } else if (w_limit === true || traceback === n) {
            aligned_index_2--;
            aligned_seq_1[aligned_index_1--] = input_seq_1[i--];
        } else { throw new Error("ERROR n_limit: " + n_limit + " w_limit: " + w_limit + " traceback: " + traceback); }
    }

    if (options.print_results) {
        console.log(input_seq_1);
        console.log(input_seq_2);
        console.log("Input Seq 1  :" + Array.prototype.map.call(input_seq_1, to_char).slice(1).join(""));
        console.log("Input Seq 2  :" + Array.prototype.map.call(input_seq_2, to_char).slice(1).join(""));
        console.log("Aligned Seq 1:" + Array.prototype.map.call(aligned_seq_1, to_char).join(""));
        console.log("Aligned Seq 2:" + Array.prototype.map.call(aligned_seq_2, to_char).join(""));

        if (options.print_intermediary_results) {
            var s = "";
            for (i=0; i<max_rows; ++i) {
                for (j=0; j<max_cols; ++j) {
                    s += input_itemsets[input_index(i,j)] + " ";
                }
                s += "\n";
            }
            console.log(s);
        }
    }

    if (dimensions === 4096 && penalty === 1 && options.nb_possible_items === 10) {
        if (!seq_equal(aligned_seq_1, expected_aligned_seq_1)) {
            throw new Error("ERROR: the aligned sequence 1 is different from the values expected.");
        }

        if (!seq_equal(aligned_seq_2, expected_aligned_seq_2)) {
            throw new Error("ERROR: the aligned sequence 2 is different from the values expected.");
        }
    } else {
        console.log(
            "WARNING: No self-checking for dimension '" + dimensions + "', penalty '" + penalty + "', " +
            "and number of possible items '" + options.nb_possible_items + "'"
        );
    }

    console.log("The total time spent is "+ (t2-t1)/1000+ " seconds\n" );
    return { status: 1,
             options: null,
             time: (t2-t1) / 1000 };
}

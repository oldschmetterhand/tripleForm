
import { TripleForm } from "../@types/types";

export const exampleForm: TripleForm = {

  lifecycle:"develop",
  name:"TripleFormWidget",
  intent:"Searching different feasts for cantus project",

  // complete main tripleForm spec comes in here
  gui:{
    parameterDelimiter:";",
    queryStart:"https://glossa.uni-graz.at/archive/objects/query:cantus.synopsis2/methods/sdef:Query/get?",
    params: [
      {
        restPathVariable: "params",
        formGroups: [
          {
            small:"Wählen Sie ein LO aus",
            required: true,
            value: [
            {label:'Diözese Brixen (I-SCAcc VII A 10)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.brixen&gt;</xsl:text>'},
{label:'Diözese Freising (D-Mu 4 Cod. 157)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.freising&gt;</xsl:text>'},
{label:'Hirsau (OSB) (CH-Zz RH 74b)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.hirsau&gt;</xsl:text>'},

{label:'Klosteneuburg (CRSA) KNB1 (A-KN 635)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb1&gt;</xsl:text>'},
{label:'Klosteneuburg (CRSA) KNB2 (A-KN 1213)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb2&gt;</xsl:text>'},
{label:'Klosteneuburg (CRSA) KNB3 (A-KN 983)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb3&gt;</xsl:text>'},
{label:'Klosteneuburg (CRSA) KNB4 (A-KN 1014)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb4&gt;</xsl:text>'},

{label:'Moosburg (Kollegiatsstift) (D-Mbs Clm 9469)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.moosburg&gt;</xsl:text>'},

{label:'Diözese Passau rekonstruierter Urtext',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.ur&gt;</xsl:text>'},
{label:'Diözese Passau SP1 (A-SPL 83/3)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.sp&gt;</xsl:text>'},
{label:'Diözese Passau SVE (A-Wn 1874)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.sve&gt;</xsl:text>'},
{label:'Diözese Passau KNB (A-KN 1194)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.knb&gt;</xsl:text>'},

{label:'Diözese Passau (CRSA) PAC (A-Gu 208)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau1.pac&gt;</xsl:text>'},

{label:'St.Nikola (CRSA) Mengotus (A-Wn 1482)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.stnikola&gt;</xsl:text>'},

{label:'Diözese Regensburg (D-Mbs clm 26947)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.regensburg&gt;</xsl:text>'},

{label:'St.Emmeram (OSB) EMM1 (D-Mbs clm 14183)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm1&gt;</xsl:text>'},
{label:'St.Emmeram (OSB) EMM2 (D-Mbs clm 14428)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm2&gt;</xsl:text>'},
{label:'St.Emmeram (OSB) EMM3 (D-Mbs clm 14073, Kastl)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm3&gt;</xsl:text>'},

{label:'Erzdiözese Salzburg rekonstruierter Urtext',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.ur&gt;</xsl:text>'},
{label:'Erzdiözese Salzburg SAL (A-Su M II 6)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.sal&gt;</xsl:text>'},
{label:'Erzdiözese Salzburg RA (D-Mbs clm 12635)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.ra&gt;</xsl:text>'},
{label:'Erzdiözese Salzburg VO (A-VOR 99)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.vo&gt;</xsl:text>'},

{label:'Seckau (CRSA) Seckau 1 (A-Gu 208)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau1.se1&gt;</xsl:text>'},
{label:'Seckau (CRSA) Seckau 2 (A-Gu 756)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau2&gt;</xsl:text>'},
{label:'Seckau (CRSA) Seckau 3 (A-Gu 1566)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau3&gt;</xsl:text>'},

{label:'Vorau-Salzburg (CRSA) (A-VOR 333)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.vorau&gt;</xsl:text>'}
            ],
            type: "select",
            id: "L01",
            placeHolder: "Wählen Sie aus der Liste ein LO aus.",
            parameter: "$1|"
          },
          { 
            value: [
            {label:'Diözese Brixen (I-SCAcc VII A 10)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.brixen&gt;</xsl:text>'},
  {label:'Diözese Freising (D-Mu 4 Cod. 157)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.freising&gt;</xsl:text>'},
  {label:'Hirsau (OSB) (CH-Zz RH 74b)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.hirsau&gt;</xsl:text>'},
  
  {label:'Klosteneuburg (CRSA) KNB1 (A-KN 635)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb1&gt;</xsl:text>'},
  {label:'Klosteneuburg (CRSA) KNB2 (A-KN 1213)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb2&gt;</xsl:text>'},
  {label:'Klosteneuburg (CRSA) KNB3 (A-KN 983)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb3&gt;</xsl:text>'},
  {label:'Klosteneuburg (CRSA) KNB4 (A-KN 1014)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb4&gt;</xsl:text>'},
  
  {label:'Moosburg (Kollegiatsstift) (D-Mbs Clm 9469)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.moosburg&gt;</xsl:text>'},
  
  {label:'Diözese Passau rekonstruierter Urtext',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.ur&gt;</xsl:text>'},
  {label:'Diözese Passau SP1 (A-SPL 83/3)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.sp&gt;</xsl:text>'},
  {label:'Diözese Passau SVE (A-Wn 1874)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.sve&gt;</xsl:text>'},
  {label:'Diözese Passau KNB (A-KN 1194)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.knb&gt;</xsl:text>'},
  
  {label:'Diözese Passau (CRSA) PAC (A-Gu 208)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau1.pac&gt;</xsl:text>'},
  
  {label:'St.Nikola (CRSA) Mengotus (A-Wn 1482)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.stnikola&gt;</xsl:text>'},
  
  {label:'Diözese Regensburg (D-Mbs clm 26947)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.regensburg&gt;</xsl:text>'},
  
  {label:'St.Emmeram (OSB) EMM1 (D-Mbs clm 14183)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm1&gt;</xsl:text>'},
  {label:'St.Emmeram (OSB) EMM2 (D-Mbs clm 14428)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm2&gt;</xsl:text>'},
  {label:'St.Emmeram (OSB) EMM3 (D-Mbs clm 14073, Kastl)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm3&gt;</xsl:text>'},
  
  {label:'Erzdiözese Salzburg rekonstruierter Urtext',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.ur&gt;</xsl:text>'},
  {label:'Erzdiözese Salzburg SAL (A-Su M II 6)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.sal&gt;</xsl:text>'},
  {label:'Erzdiözese Salzburg RA (D-Mbs clm 12635)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.ra&gt;</xsl:text>'},
  {label:'Erzdiözese Salzburg VO (A-VOR 99)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.vo&gt;</xsl:text>'},
  
  {label:'Seckau (CRSA) Seckau 1 (A-Gu 208)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau1.se1&gt;</xsl:text>'},
  {label:'Seckau (CRSA) Seckau 2 (A-Gu 756)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau2&gt;</xsl:text>'},
  {label:'Seckau (CRSA) Seckau 3 (A-Gu 1566)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau3&gt;</xsl:text>'},
  
  {label:'Vorau-Salzburg (CRSA) (A-VOR 333)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.vorau&gt;</xsl:text>'}
            ],
            small:"Wählen Sie ein LO aus",
            type: "select",
            id: "1233333as",
            placeHolder: "Wählen Sie aus der Liste ein LO aus.",
            parameter: "$2|",
            required:true
          },
          {
            value: [
            {label:'Diözese Brixen (I-SCAcc VII A 10)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.brixen&gt;</xsl:text>'},
  {label:'Diözese Freising (D-Mu 4 Cod. 157)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.freising&gt;</xsl:text>'},
  {label:'Hirsau (OSB) (CH-Zz RH 74b)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.hirsau&gt;</xsl:text>'},
  
  {label:'Klosteneuburg (CRSA) KNB1 (A-KN 635)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb1&gt;</xsl:text>'},
  {label:'Klosteneuburg (CRSA) KNB2 (A-KN 1213)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb2&gt;</xsl:text>'},
  {label:'Klosteneuburg (CRSA) KNB3 (A-KN 983)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb3&gt;</xsl:text>'},
  {label:'Klosteneuburg (CRSA) KNB4 (A-KN 1014)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.klosterneuburg.knb4&gt;</xsl:text>'},
  
  {label:'Moosburg (Kollegiatsstift) (D-Mbs Clm 9469)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.moosburg&gt;</xsl:text>'},
  
  {label:'Diözese Passau rekonstruierter Urtext',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.ur&gt;</xsl:text>'},
  {label:'Diözese Passau SP1 (A-SPL 83/3)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.sp&gt;</xsl:text>'},
  {label:'Diözese Passau SVE (A-Wn 1874)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.sve&gt;</xsl:text>'},
  {label:'Diözese Passau KNB (A-KN 1194)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.passau.knb&gt;</xsl:text>'},
  
  {label:'Diözese Passau (CRSA) PAC (A-Gu 208)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau1.pac&gt;</xsl:text>'},
  
  {label:'St.Nikola (CRSA) Mengotus (A-Wn 1482)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.stnikola&gt;</xsl:text>'},
  
  {label:'Diözese Regensburg (D-Mbs clm 26947)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.regensburg&gt;</xsl:text>'},
  
  {label:'St.Emmeram (OSB) EMM1 (D-Mbs clm 14183)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm1&gt;</xsl:text>'},
  {label:'St.Emmeram (OSB) EMM2 (D-Mbs clm 14428)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm2&gt;</xsl:text>'},
  {label:'St.Emmeram (OSB) EMM3 (D-Mbs clm 14073, Kastl)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.emmeram.emm3&gt;</xsl:text>'},
  
  {label:'Erzdiözese Salzburg rekonstruierter Urtext',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.ur&gt;</xsl:text>'},
  {label:'Erzdiözese Salzburg SAL (A-Su M II 6)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.sal&gt;</xsl:text>'},
  {label:'Erzdiözese Salzburg RA (D-Mbs clm 12635)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.ra&gt;</xsl:text>'},
  {label:'Erzdiözese Salzburg VO (A-VOR 99)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.salzburg.vo&gt;</xsl:text>'},
  
  {label:'Seckau (CRSA) Seckau 1 (A-Gu 208)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau1.se1&gt;</xsl:text>'},
  {label:'Seckau (CRSA) Seckau 2 (A-Gu 756)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau2&gt;</xsl:text>'},
  {label:'Seckau (CRSA) Seckau 3 (A-Gu 1566)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.seckau3&gt;</xsl:text>'},
  
  {label:'Vorau-Salzburg (CRSA) (A-VOR 333)',value:'<xsl:text disable-output-escaping="yes">&lt;https://gams.uni-graz.at/o:cantus.vorau&gt;</xsl:text>'}
            ],
            small:"Wählen Sie ein LO aus",
            type: "select",
            id: "1233333asasdd",
            placeHolder: "Wählen Sie aus der Liste ein LO aus.",
            parameter: "$3|",
            required:true
          }
        ]
      },
      {
        restPathVariable: "mode",
        formGroups: [
          {
            small:"Wählen Sie ein Fest",
            value: [
            {value: "default", label: "Bitte wählen..."}, {
value: "01000000",
label: "In tempore Adventus"
}, {
value: "01011000",
label: "Dom. 1 Adventus"
}, {value: "01012000", label: "Fer. 2 Hebd. 1 Adv."}, {
value: "01013000",
label: "Fer. 3 Hebd. 1 Adv."
}, {value: "01014000", label: "Fer. 4 Hebd. 1 Adv."}, {
value: "01015000",
label: "Fer. 5 Hebd. 1 Adv."
}, {value: "01016000", label: "Fer. 6 Hebd. 1 Adv."}, {
value: "01017000",
label: "Sabbato Hebd. 1 Adv."
}, {value: "01018000", label: "Hebd. 1 Adventus"}, {value: "01021000", label: "Dom. 2 Adventus"}, {
value: "01022000",
label: "Fer. 2 Hebd. 2 Adv."
}, {value: "01023000", label: "Fer. 3 Hebd. 2 Adv."}, {
value: "01024000",
label: "Fer. 4 Hebd. 2 Adv."
}, {value: "01025000", label: "Fer. 5 Hebd. 2 Adv."}, {
value: "01026000",
label: "Fer. 6 Hebd. 2 Adv."
}, {value: "01027000", label: "Sabbato Hebd. 2 Adv."}, {value: "01028000", label: "Hebd. 2 Adventus"}, {
value: "01031000",
label: "Dom. 3 Adventus"
}, {value: "01032000", label: "Fer. 2 Hebd. 3 Adv."}, {
value: "01033000",
label: "Fer. 3 Hebd. 3 Adv."
}, {value: "01034000", label: "Fer. 4 Hebd. 3 Adv."}, {value: "01038000", label: "Hebd. 3 Adventus"}, {
value: "01030009",
label: "Feriae Clama in fortitudine"
}, {value: "01034009", label: "Fer. 4 Q.T. Adventus"}, {
value: "01035000",
label: "Fer. 5 Hebd. 3 Adv."
}, {value: "01035009", label: "Fer. 5 Q.T. Adventus"}, {
value: "01036000",
label: "Fer. 6 Hebd. 3 Adv."
}, {value: "01036009", label: "Fer. 6 Q.T. Adventus"}, {
value: "01037000",
label: "Sabbato Hebd. 3 Adv."
}, {value: "01037009", label: "Sabb. Q.T. Adventus"}, {value: "01041000", label: "Dom. 4 Adventus"}, {
value: "01042000",
label: "Fer. 2 Hebd. 4 Adv."
}, {value: "01043000", label: "Fer. 3 Hebd. 4 Adv."}, {
value: "01044000",
label: "Fer. 4 Hebd. 4 Adv."
}, {value: "01045000", label: "Fer. 5 Hebd. 4 Adv."}, {
value: "01046000",
label: "Fer. 6 Hebd. 4 Adv."
}, {value: "01047000", label: "Sabbato Hebd. 4 Adv."}, {value: "01048000", label: "Hebd. 4 Adventus"}, {
value: "01048010",
label: "Antiphonae Majores"
}, {value: "01048010", label: "Antiphonae Maiores"}, {value: "02010100", label: "Octava Nat. Domini"}, {
value: "02010108",
label: "Octava Nat. Domini,8"
}, {value: "02010110", label: "Circumcisio Domini"}, {value: "02010200", label: "Octava Stephani"}, {
value: "02010300",
label: "Oct. Joannis Evang."
}, {value: "02010300", label: "Oct. Ioannis Evang."}, {
value: "02010400",
label: "Oct. Nat. Innocent."
}, {value: "02010500", label: "Vigilia Epiphaniae"}, {value: "02010608", label: "Epiphania,8"}, {
value: "05001000",
label: "Dom. p. Epiphaniam"
}, {value: "05010700", label: "Die 2 p. Epiphaniam"}, {
value: "05010800",
label: "Die 3 p. Epiphaniam"
}, {value: "05010900", label: "Die 4 p. Epiphaniam"}, {
value: "05010100",
label: "Die 5 p. Epiphaniam"
}, {value: "05011100", label: "Die 6 p. Epiphaniam"}, {
value: "05011200",
label: "Die 7 p. Epiphaniam"
}, {value: "02122400", label: "Vigilia Nat. Domini"}, {value: "02122500", label: "Nativitas Domini"}, {
value: "02122508",
label: "Nativitas Domini,8"
}, {value: "03000000", label: "In tempore Nat."}, {value: "02122600", label: "Stephani"}, {
value: "02122700",
label: "Joannis Evang."
}, {value: "02122700", label: "Ioannis Evang."}, {value: "02122800", label: "Nat. Innocentium"}, {
value: "02122900",
label: "Die 5 p. Nat. Domini"
}, {value: "02123000", label: "Die 6 p. Nat. Domini"}, {
value: "03021000",
label: "Dom. p. Nat. Dom."
}, {value: "04001000", label: "Dom. per annum"}, {value: "04002000", label: "Feria 2 per annum"}, {
value: "04003000",
label: "Feria 3 per annum"
}, {value: "04004000", label: "Feria 4 per annum"}, {value: "04005000", label: "Feria 5 per annum"}, {
value: "04006000",
label: "Feria 6 per annum"
}, {value: "04007000", label: "Sabbato per annum"}, {value: "04008000", label: "Hebd. per annum"}, {
value: "05000000",
label: "In tempore Epiph."
}, {value: "05007000", label: "Sabb. p. Epiphaniam"}, {value: "05010600", label: "Epiphania"}, {
value: "05011000",
label: "Dom. 1 p. Epiph."
}, {value: "05011300", label: "Octava Epiphaniae"}, {
value: "05012000",
label: "Fer. 2 p. Dom. 1. p. Ep."
}, {value: "05013000", label: "Fer. 3 p. Dom. 1. p. Ep."}, {
value: "05014000",
label: "Fer. 4 p. Dom. 1. p. Ep."
}, {value: "05015000", label: "Fer. 5 p. Dom. 1. p. Ep."}, {
value: "05016000",
label: "Fer. 6 p. Dom. 1. p. Ep."
}, {value: "05017000", label: "Sabb. p. Dom. 1. p. Ep."}, {
value: "05021000",
label: "Dom. 2 p. Epiph."
}, {value: "05022000", label: "Fer. 2 p. Dom. 2. p. Ep."}, {
value: "05023000",
label: "Fer. 3 p. Dom. 2. p. Ep."
}, {value: "05024000", label: "Fer. 4 p. Dom. 2. p. Ep."}, {
value: "05025000",
label: "Fer. 5 p. Dom. 2. p. Ep."
}, {value: "05026000", label: "Fer. 6 p. Dom. 2. p. Ep."}, {
value: "05027000",
label: "Sabb. p. Dom. 2. p. Ep."
}, {value: "05031000", label: "Dom. 3 p. Epiph."}, {
value: "05032000",
label: "Fer. 2 p. Dom. 2. p. Ep."
}, {value: "05033000", label: "Fer. 3 p. Dom. 2. p. Ep."}, {
value: "05034000",
label: "Fer. 4 p. Dom. 2. p. Ep."
}, {value: "05035000", label: "Fer. 5 p. Dom. 2. p. Ep."}, {
value: "05036000",
label: "Fer. 6 p. Dom. 2. p. Ep."
}, {value: "05037000", label: "Sabb. p. Dom. 2. p. Ep."}, {
value: "05032000",
label: "Fer. 2 Hebd. 3 p.Ep."
}, {value: "05033000", label: "Fer. 3 Hebd. 3 p.Ep."}, {
value: "05034000",
label: "Fer. 4 Hebd. 3 p.Ep."
}, {value: "05041000", label: "Dom. 4 p. Epiph."}, {
value: "05042000",
label: "Fer. 2 p. Dom. 4. p. Ep."
}, {value: "05043000", label: "Fer. 3 p. Dom. 4. p. Ep."}, {
value: "05044000",
label: "Fer. 4 p. Dom. 4. p. Ep."
}, {value: "05045000", label: "Fer. 5 p. Dom. 4. p. Ep."}, {
value: "05046000",
label: "Fer. 6 p. Dom. 4. p. Ep."
}, {value: "05047000", label: "Sabb. p. Dom. 4. p. Ep."}, {
value: "05051000",
label: "Dom. 5 p. Epiph."
}, {value: "05052000", label: "Fer. 2 p. Dom. 5. p. Ep."}, {
value: "05053000",
label: "Fer. 3 p. Dom. 5. p. Ep."
}, {value: "05054000", label: "Fer. 4 p. Dom. 5. p. Ep."}, {
value: "05055000",
label: "Fer. 5 p. Dom. 5. p. Ep."
}, {value: "05056000", label: "Fer. 6 p. Dom. 5. p. Ep."}, {
value: "05057000",
label: "Sabb. p. Dom. 5. p. Ep."
}, {value: "05061000", label: "Dom. 6 p. Epiph."}, {value: "06011000", label: "Dom. Septuagesimae"}, {
value: "06012000 ",
label: "Fer. 2 Septuagesimae"
}, {value: "06013000 ", label: "Fer. 3 Septuagesimae"}, {
value: "06014000",
label: "Fer. 4 Septuagesimae"
}, {value: "06015000", label: "Fer. 5 Septuagesimae"}, {
value: "06016000",
label: "Fer. 6 Septuagesimae"
}, {value: "06017000", label: "Sabb. Septuagesimae"}, {
value: "06018000",
label: "Hebd. Septuagesimae"
}, {value: "06021000", label: "Dom. Sexagesimae"}, {value: "06022000", label: "Fer. 2 Sexagesimae"}, {
value: "06023000 ",
label: "Fer. 3 Sexagesimae"
}, {value: "06024000", label: "Fer. 4 Sexagesimae"}, {value: "06025000", label: "Fer. 5 Sexagesimae"}, {
value: "06026000",
label: "Fer. 6 Sexagesimae"
}, {value: "06027000 ", label: "Sabb. Sexagesimae"}, {value: "06028000", label: "Hebd. Sexagesimae"}, {
value: "06031000",
label: "Dom. Quinquagesimae"
}, {value: "06032000", label: "Fer. 2 Quinquages."}, {value: "06033000", label: "Fer. 3 Quinquages."}, {
value: "06034000",
label: "Fer. 4 Cinerum"
}, {value: "06035000", label: "Fer. 5 post Cineres"}, {
value: "06036000",
label: "Fer. 6 post Cineres"
}, {value: "06037000", label: "Sabbato post Cineres"}, {
value: "06038000",
label: "Hebd. Quinquagesimae"
}, {value: "07000000", label: "In tempore Quad."}, {value: "07011000", label: "Dom. 1 Quadragesimae"}, {
value: "07012000",
label: "Fer. 2 Hebd. 1 Quad."
}, {value: "07013000", label: "Fer. 3 Hebd. 1 Quad."}, {
value: "07014000",
label: "Fer. 4 Hebd. 1 Quad."
}, {value: "07015000", label: "Fer. 5 Hebd. 1 Quad."}, {
value: "07016000",
label: "Fer. 6 Hebd. 1 Quad."
}, {value: "07017000", label: "Sabb. Hebd. 1 Quad."}, {value: "07018000", label: "Hebd. 1 Quad."}, {
value: "07021000",
label: "Dom. 2 Quadragesimae"
}, {value: "07022000", label: "Fer. 2 Hebd. 2 Quad."}, {
value: "07023000",
label: "Fer. 3 Hebd. 2 Quad."
}, {value: "07024000", label: "Fer. 4 Hebd. 2 Quad."}, {
value: "07025000",
label: "Fer. 5 Hebd. 2 Quad."
}, {value: "07026000", label: "Fer. 6 Hebd. 2 Quad."}, {
value: "07027000",
label: "Sabb. Hebd. 2 Quad."
}, {value: "07028000", label: "Hebd. 2 Quad."}, {value: "07031000", label: "Dom. 3 Quadragesimae"}, {
value: "07032000",
label: "Fer. 2 Hebd. 3 Quad."
}, {value: "07033000", label: "Fer. 3 Hebd. 3 Quad."}, {
value: "07034000",
label: "Fer. 4 Hebd. 3 Quad."
}, {value: "07035000", label: "Fer. 5 Hebd. 3 Quad."}, {
value: "07036000",
label: "Fer. 6 Hebd. 3 Quad."
}, {value: "07037000", label: "Sabb. Hebd. 3 Quad."}, {value: "07038000", label: "Hebd. 3 Quad."}, {
value: "07041000",
label: "Dom. 4 Quadragesimae"
}, {value: "07042000", label: "Fer. 2 Hebd. 4 Quad."}, {
value: "07043000",
label: "Fer. 3 Hebd. 4 Quad."
}, {value: "07044000", label: "Fer. 4 Hebd. 4 Quad."}, {
value: "07045000",
label: "Fer. 5 Hebd. 4 Quad."
}, {value: "07046000", label: "Fer. 6 Hebd. 4 Quad."}, {
value: "07047000",
label: "Sabb. Hebd. 4 Quad."
}, {value: "07048000", label: "Hebd. 4 Quad."}, {value: "07051000", label: "Dom. de Passione"}, {
value: "07052000",
label: "Fer. 2 de Passione"
}, {value: "07053000", label: "Fer. 3 de Passione"}, {value: "07054000", label: "Fer. 4 de Passione"}, {
value: "07055000",
label: "Fer. 5 de Passione"
}, {value: "07056000", label: "Fer. 6 de Passione"}, {value: "07057000", label: "Sabb. de Passione"}, {
value: "07058000",
label: "Hebd. de Passione"
}, {value: "07061000", label: "Dom. in Palmis"}, {value: "07062000", label: "Fer. 2 Maj. Hebd."}, {
value: "07062000",
label: "Fer. 2 Mai. Hebd."
}, {value: "07063000", label: "Fer. 3 Maj. Hebd."}, {value: "07063000", label: "Fer. 3 Mai. Hebd."}, {
value: "07064000",
label: "Fer. 4 Maj. Hebd."
}, {value: "07064000", label: "Fer. 4 Mai. Hebd."}, {value: "07065000", label: "Fer. 5 in Cena Dom."}, {
value: "07065010",
label: "Ad Mandatum"
}, {value: "07066000", label: "Fer. 6 in Parasceve"}, {value: "07067000", label: "Sabbato Sancto"}, {
value: "08000000",
label: "In tempore Paschae"
}, {value: "08001000", label: "Dominica TP"}, {value: "08002000", label: "Feria 2 TP"}, {
value: "08003000",
label: "Feria 3 TP"
}, {value: "08004000", label: "Feria 4 TP"}, {value: "08005000", label: "Feria 5 TP"}, {
value: "08006000",
label: "Feria 6 TP"
}, {value: "08011000", label: "Dom. Resurrectionis"}, {value: "08011008", label: "Dom. Resurrect.,8"}, {
value: "08012000",
label: "Fer. 2 p. Pascha"
}, {value: "08013000", label: "Fer. 3 p. Pascha"}, {value: "08014000", label: "Fer. 4 p. Pascha"}, {
value: "08015000",
label: "Fer. 5 p. Pascha"
}, {value: "08016000", label: "Fer. 6 p. Pascha"}, {value: "08017000", label: "Sabb. p. Pascha"}, {
value: "08017000",
label: "Sabbato in Albis"
}, {value: "08021000", label: "Octava Paschae"}, {value: "08022000", label: "Fer. 2 p. Oct.Pasch."}, {
value: "08023000",
label: "Fer. 3 p. Oct.Pasch."
}, {value: "08024000", label: "Fer. 4 p. Oct.Pasch."}, {
value: "08025000",
label: "Fer. 5 p. Oct.Pasch."
}, {value: "08026000", label: "Fer. 6 p. Oct.Pasch."}, {value: "08026010", label: "De Sancta Lancea"}, {
value: "08027000",
label: "Sabb. p. Oct. Pasch."
}, {value: "08031000", label: "Dom. 2 p. Pascha"}, {value: "08032000", label: "Fer. 2 Hebd. 3 Pasc."}, {
value: "08033000",
label: "Fer. 3 Hebd. 3 Pasc."
}, {value: "08034000", label: "Fer. 4 Hebd. 3 Pasc."}, {
value: "08035000",
label: "Fer. 5 Hebd. 3 Pasc."
}, {value: "08036000", label: "Fer. 6 Hebd. 3 Pasc."}, {
value: "08037000",
label: "Sabbato 3 p. Pascha"
}, {value: "08041000", label: "Dom. 3 p. Pascha"}, {value: "08042000", label: "Fer. 2 Hebd. 4 Pasc."}, {
value: "08042500",
label: "In Letaniis maj."
}, {value: "08043000", label: "Fer. 3 Hebd. 4 Pasc."}, {
value: "08044000",
label: "Fer. 4 Hebd. 4 Pasc."
}, {value: "08045000", label: "Fer. 5 Hebd. 4 Pasc."}, {
value: "08046000",
label: "Fer. 6 Hebd. 4 Pasc."
}, {value: "08047000", label: "Sabbato 4 p. Pascha"}, {value: "08051000", label: "Dom. 4 p. Pascha"}, {
value: "08052000",
label: "Fer. 2 Hebd. 5 Pasc."
}, {value: "08053000", label: "Fer. 3 Hebd. 5 Pasc."}, {
value: "08054000",
label: "Fer. 4 Hebd. 5 Pasc."
}, {value: "08055000", label: "Fer. 5 Hebd. 5 Pasc."}, {
value: "08056000",
label: "Fer. 6 Hebd. 5 Pasc."
}, {value: "08057000", label: "Sabbato 5 p. Pascha"}, {value: "08061000", label: "Dom. 5 p. Pascha"}, {
value: "08062000",
label: "Fer. 2 in Letaniis"
}, {value: "08063000", label: "Fer. 3 in Letaniis"}, {value: "08064000", label: "Fer. 4 in Letaniis"}, {
value: "08065000",
label: "Ascensio Domini"
}, {value: "08065008", label: "Ascensio Domini,8"}, {value: "08066000", label: "Fer. 6 p. Ascensio."}, {
value: "08067000",
label: "Sabb. p. Ascensionem"
}, {value: "08068010", label: "In Letaniis"}, {value: "08071000", label: "Dom. p. Ascensionem"}, {
value: "08072000",
label: "Fer. 2 p. Ascensio."
}, {value: "08073000", label: "Fer. 3 p. Ascensio."}, {
value: "08074000",
label: "Fer. 4 p. Ascensio."
}, {value: "08075000", label: "Oct. Ascens. Domini"}, {
value: "08076000",
label: "Fer. 6 p. Oct. Asc."
}, {value: "08077000", label: "Vigilia Pentecostes"}, {
value: "08077100",
label: "Sabb. p. Oct. Asc."
}, {value: "08081000", label: "Dom. Pentecostes"}, {value: "08081008", label: "Dom. Pentecostes,8"}, {
value: "08081008",
label: "Octava Pentecostes"
}, {value: "08082000", label: "Fer. 2 Pent."}, {value: "08082000", label: "Fer. 2 Pent."}, {
value: "08083000",
label: "Fer. 3 Pent."
}, {value: "08083000", label: "Fer. 3 Pent."}, {value: "08084000", label: "Fer. 4 Pent."}, {
value: "08084000",
label: "Fer. 4 Pent."
}, {value: "08085000", label: "Fer. 5 Pent."}, {value: "08085000", label: "Fer. 5 Pent."}, {
value: "08086000",
label: "Fer. 6 Pent."
}, {value: "08086000", label: "Fer. 6 Pent."}, {value: "08087000", label: "Sabbato Pent."}, {
value: "08087000",
label: "Sabbato Pent."
}, {value: "09011000", label: "De Trinitate"}, {value: "09011008", label: "De Trinitate,8"}, {
value: "09011010",
label: "Dom. 1 p. Pent."
}, {value: "09012000", label: "Fer. 2 Trinitate"}, {value: "09013000", label: "Fer. 3 Trinitate"}, {
value: "09014000",
label: "Fer. 4 Trinitate"
}, {value: "09015000", label: "Fer. 5 Trinitate"}, {value: "09015000", label: "Corporis Christi"}, {
value: "09015008",
label: "Corporis Christi,8"
}, {value: "09016000", label: "Fer. 6 Trinitate"}, {value: "09016000", label: "Fer. 6 Cor. Christi"}, {
value: "09017000",
label: "Sabbato Trinitate"
}, {value: "09017000", label: "Sabb. Cor. Christi"}, {
value: "09021000",
label: "Dom. 1 p. Oct. Pent"
}, {value: "09021000", label: "Dom. 2 p. Pent."}, {value: "09021010", label: "Dom. p. Cor. Christi"}, {
value: "09022000",
label: "Fer. 2 p. Dom. 1 p. Oct. Pent."
}, {value: "09023000", label: "Fer. 3 p. Dom. 1 p. Oct. Pent."}, {
value: "09025000",
label: "Oct.Corporis Christi"
}, {value: "09026000", label: "Fer. 6 p. Dom. 1 p. Oct. Pent."}, {
value: "09027000",
label: "Sabb. p. Dom. 1 p. Oct. Pent."
}, {value: "09031000", label: "Dom. 3 p. Pent."}, {value: "09041000", label: "Dom. 4 p. Pent."}, {
value: "09051000",
label: "Dom. 5 p. Pent."
}, {value: "09061000", label: "Dom. 6 p. Pent."}, {value: "09071000", label: "Dom. 7 p. Pent."}, {
value: "09081000",
label: "Dom. 8 p. Pent."
}, {value: "09091000", label: "Dom. 9 p. Pent."}, {value: "09101000", label: "Dom. 10 p. Pent."}, {
value: "09111000",
label: "Dom. 11 p. Pent."
}, {value: "09121000", label: "Dom. 12 p. Pent."}, {value: "09131000", label: "Dom. 13 p. Pent."}, {
value: "09141000",
label: "Dom. 14 p. Pent."
}, {value: "09151000", label: "Dom. 15 p. Pent."}, {value: "09161000", label: "Dom. 16 p. Pent."}, {
value: "09171000",
label: "Dom. 17 p. Pent."
}, {value: "09181000", label: "Dom. 18 p. Pent."}, {value: "09191000", label: "Dom. 19 p. Pent."}, {
value: "09201000",
label: "Dom. 20 p. Pent."
}, {value: "09211000", label: "Dom. 21 p. Pent."}, {value: "09221000", label: "Dom. 22 p. Pent."}, {
value: "09231000",
label: "Dom. 23 p. Pent."
}, {value: "09241000", label: "Dom. 24 p. Pent."}, {value: "09251000", label: "Dom. 25 p. Pent."}, {
value: "09261000",
label: "Dom. 26 p. Pent."
}, {value: "10001000", label: "Dominica in estate"}, {value: "10002000", label: "Feria 2 in estate"}, {
value: "10003000",
label: "Feria 3 in estate"
}, {value: "10004000", label: "Feria 4 in estate"}, {value: "10005000", label: "Feria 5 in estate"}, {
value: "10006000",
label: "Feria 6 in estate"
}, {value: "10007000", label: "Sabbato in estate"}, {value: "10100000", label: "De Regum"}, {
value: "10200000",
label: "De Sapientia"
}, {value: "10300000", label: "De Job"}, {value: "10300000", label: "De Iob"}, {
value: "10400000",
label: "De Tobia"
}, {value: "10500000", label: "De Judith"}, {value: "10500000", label: "De Iudith"}, {
value: "10600000",
label: "De Esther"
}, {value: "10800000", label: "De Machabaeis"}, {value: "10900000", label: "De Prophetis"}, {
value: "11081100",
label: "Dom.1 mensis Augusti"
}, {value: "11090409", label: "Fer. 4 Q.T. Pent."}, {value: "11090409", label: "Fer. 4 Q.T. Sept."}, {
value: "11090609",
label: "Fer. 6 Q.T. Pent."
}, {value: "11090609", label: "Fer. 6 Q.T. Sept."}, {value: "11090709", label: "Sabbato Q.T. Pent."}, {
value: "11090709",
label: "Sabbato Q.T. Sept."
}, {value: "11091100", label: "Dom.1 mensis Sept."}, {value: "11092100", label: "Dom.2 mensis Sept."}, {
value: "11093100",
label: "Dom.3 mensis Sept."
}, {value: "11094100", label: "Dom.4 mensis Sept."}, {value: "11101100", label: "Dom.1 mensis Oct."}, {
value: "11111100",
label: "Dom.1 mensis Nov."
}, {value: "16001000", label: "Ad Benedicite"}, {value: "12001000", label: "Comm. Apostolorum"}, {
value: "12002000",
label: "Comm. unius Mart."
}, {value: "12002100", label: "Comm. un. Mart.Pont."}, {
value: "12003000",
label: "Comm. plur. Mart."
}, {value: "12004000", label: "Comm. unius Conf."}, {
value: "12004100",
label: "Comm. un. Conf.Pont."
}, {value: "12004700", label: "Comm.un.Con.non Pon."}, {
value: "12005000",
label: "Comm. plur. Conf."
}, {value: "12005200", label: "Comm.pl.Con.non Pon."}, {
value: "12005100",
label: "Comm. pl. Conf.Pont."
}, {value: "12006000", label: "Comm. Virginum"}, {value: "12007000", label: "Comm. un. Virg.Mart."}, {
value: "12007200",
label: "Comm.un.Vir.non Mar."
}, {value: "12008000", label: "In Dedicatione Eccl."}, {
value: "12008000",
label: "In Dedicatione Ecclesiae"
}, {value: "12008008", label: "In Dedicat. Eccl.,8"}, {
value: "12008100",
label: "Oct. Dedicat. Eccl."
}, {value: "12011000", label: "Comm. Evangelistarum"}, {value: "12013000", label: "De Angelis"}, {
value: "12014000",
label: "De Patronis"
}, {value: "12801000", label: "Comm. Apostolorum TP"}, {
value: "12802000",
label: "Comm. unius Mart. TP"
}, {value: "12803000", label: "Comm. plur. Mart. TP"}, {
value: "12804000",
label: "Comm. unius Conf. TP"
}, {value: "12805000", label: "Comm. pl. Conf. TP"}, {value: "12806000", label: "Comm. Virginum TP"}, {
value: "12807000",
label: "Comm. un. Mart. TP"
}, {value: "12815000", label: "De Sanctis TP"}, {value: "13001000", label: "Pro Defunctis"}, {
value: "14010100",
label: "Basilii, Udilonis"
}, {value: "14010530", label: "Severini, Apost."}, {value: "14010700", label: "Valentini, Epi."}, {
value: "14010820",
label: "Erhardi"
}, {value: "14010900", label: "Celsi, Juliani"}, {value: "14010900", label: "Celsi, Iuliani"}, {
value: "14011010",
label: "Pauli Heremitae"
}, {value: "14011410", label: "Felicis Nolani"}, {value: "14011510", label: "Mauri"}, {
value: "14011530",
label: "Macarii"
}, {value: "14011600", label: "Marcelli, Pont."}, {value: "14011700", label: "Antonii"}, {
value: "14011800",
label: "Priscae"
}, {value: "14012000", label: "Fabiani, Sebastiani"}, {value: "14012100", label: "Agnetis"}, {
value: "14012200",
label: "Vincentii"
}, {value: "14012300", label: "Emerentianae"}, {value: "14012400", label: "Timothei"}, {
value: "14012500",
label: "Conversio Pauli"
}, {value: "14012510", label: "Praeiecti"}, {value: "14012600", label: "Polycarpi"}, {
value: "14012700",
label: "Ioannis Chrysostomi"
}, {value: "14012800", label: "Octava Agnetis"}, {value: "14012810", label: "Caroli imp."}, {
value: "14012820",
label: "Cyrilli, Alexandrini"
}, {value: "14012930", label: "Valerii"}, {value: "14013110", label: "Transl. Vigilii"}, {
value: "14013110",
label: "Vigilii"
}, {value: "14020100", label: "Brigidae"}, {value: "14020110", label: "Ignatii"}, {
value: "14020130",
label: "Severi ep."
}, {value: "14020200", label: "Purificatio Mariae"}, {value: "14020300", label: "Blasii"}, {
value: "14020308,8",
label: "Blasii"
}, {value: "14020800", label: "Transl. Helenae Imp."}, {value: "14020900", label: "Apolloniae"}, {
value: "14021010",
label: "Octava Blasii"
}, {value: "14020500", label: "Agathae"}, {value: "14020510", label: "Ingenuini, Albuini"}, {
value: "14020610",
label: "Dorotheae"
}, {value: "14020620", label: "Amandi"}, {value: "14020800", label: "Richardi regis Angliae"}, {
value: "14020910",
label: "Altonis"
}, {value: "14021000", label: "Scholasticae"}, {value: "14021400", label: "Valentini"}, {
value: "14021410",
label: "Vitalis, Feliculae, Zenonis"
}, {value: "14021520", label: "Transl. Leopoldi"}, {value: "14021600", label: "Julianae"}, {
value: "14021600",
label: "Iulianae"
}, {value: "14022200", label: "Cathedra Petri"}, {value: "14022310", label: "Vig. Matthiae"}, {
value: "14022400",
label: "Matthiae"
}, {value: "14022500", label: "Walburgae"}, {value: "14030300", label: "Kunegundis"}, {
value: "14030600",
label: "Perpetuae, Felicit."
}, {value: "14031200", label: "Gregorii"}, {value: "14031700", label: "Gertrudis"}, {
value: "14031900",
label: "Iosephi"
}, {value: "14032010", label: "Ioachimi"}, {value: "14032010", label: "Joachimi"}, {
value: "14032100",
label: "Benedicti"
}, {value: "14032400", label: "Quirini"}, {value: "14032500", label: "Annuntiatio Mariae"}, {
value: "14032610",
label: "Castuli"
}, {value: "14032700", label: "Ruperti"}, {value: "14030200", label: "Conv. Mariae Mag."}, {
value: "14040400",
label: "Ambrosii"
}, {value: "14041110", label: "Leonis"}, {value: "14041400", label: "Tiburtii, Valeriani"}, {
value: "14041900",
label: "Leonis, Pont."
}, {value: "14042000", label: "Mariae Aegyptiacae"}, {value: "14042300", label: "Georgii"}, {
value: "14042400",
label: "Egberti"
}, {value: "14042500", label: "Marci"}, {value: "14042600", label: "Anacleti, Pont."}, {
value: "14042610",
label: "Trudberti"
}, {value: "14042800", label: "Vitalis, Valeriae"}, {
value: "14042830",
label: "Visitatio Mariae-1	"
}, {value: "14042900", label: "Petri, Mart."}, {value: "14043030", label: "Vig. Philippi, Jacobi"}, {
value: "14043030",
label: "Vig. Philippi, Iacobi"
}, {value: "14050100", label: "Philippi, Jacobi"}, {value: "14050100", label: "Philippi, Iacobi"}, {
value: "14050150",
label: "Transl. Walburgae"
}, {value: "14050210", label: "Transl. Elisabeth"}, {value: "14050120", label: "Mariae ad martyres"}, {
value: "14050140",
label: "Sigismundi"
}, {value: "14050300", label: "Inventio Crucis"}, {value: "14050310", label: "Alexandri et Soc."}, {
value: "14050400",
label: "Floriani"
}, {value: "14050410", label: "Godehardi"}, {value: "14050430", label: "De corona spinea"}, {
value: "14050500",
label: "Vigilia Joan. Port. Lat."
}, {value: "14050500", label: "Vigilia Ioan. Port. Lat."}, {
value: "14050600",
label: "Joannis Port. Lat."
}, {value: "14050600", label: "Ioannis Port. Lat."}, {value: "14050700", label: "Transl. Stephani"}, {
value: "14050810",
label: "Victoris Mauri"
}, {value: "14050820", label: "Translatio Findani"}, {value: "14050900", label: "Transl. Nicolai"}, {
value: "14051000",
label: "Gordiani, Epimachi"
}, {value: "14051110", label: "Gangulfi"}, {value: "14051210", label: "Pancratii et Soc."}, {
value: "14051240",
label: "Nerei, Achillei"
}, {value: "14051300", label: "Servatii"}, {value: "14051310", label: "Transl. Albuini"}, {
value: "14051430",
label: "Bonifacii mart."
}, {value: "14051520", label: "Sophiae"}, {value: "14051910", label: "Pudentianae,Pudentis"}, {
value: "14052300",
label: "Transl. Candidi"
}, {value: "14052510", label: "Urbani"}, {value: "14052900", label: "Maximini"}, {
value: "14053110",
label: "Petronillae"
}, {value: "14060200", label: "Marcellini, Petri"}, {value: "14060300", label: "Erasmi"}, {
value: "14060500",
label: "Bonifacii"
}, {value: "14060710", label: "Transl. Servatii"}, {value: "14060900", label: "Primi, Feliciani"}, {
value: "14061100",
label: "Barnabae"
}, {value: "14061200", label: "Basilidis et Soc."}, {value: "14061300", label: "Antonii Patavini"}, {
value: "14061420",
label: "Transl. Castuli"
}, {value: "14061510", label: "Viti, Modesti"}, {value: "14061610", label: "Transl. Quirini"}, {
value: "14061700",
label: "Transl. Arsacii"
}, {value: "14061700", label: "Transl. Aichardi"}, {value: "14061800", label: "Marci, Marcellini"}, {
value: "14061900",
label: "Gervasii, Protasii"
}, {value: "14062100", label: "Albani, Mart."}, {value: "14062200", label: "Paulini Nolansis"}, {
value: "14062220",
label: "Acacii et Soc."
}, {value: "14062300", label: "Vig. Joannis Bapt."}, {value: "14062300", label: "Vig. Ioannis Bapt."}, {
value: "14062400",
label: "Joannis Baptistae"
}, {value: "14062400", label: "Ioannis Baptistae"}, {value: "14062408", label: "Joannis Baptistae,8"}, {
value: "14062408",
label: "Ioannis Baptistae,8"
}, {value: "14062530", label: "Gallicani"}, {value: "14062600", label: "Joannis, Pauli"}, {
value: "14062600",
label: "Ioannis, Pauli"
}, {value: "14062800", label: "Leonis"}, {value: "14062810", label: "Vigilia Petri, Pauli"}, {
value: "14062900",
label: "Petri, Pauli"
}, {value: "14062908", label: "Petri, Pauli,8"}, {value: "14062910", label: "Petri"}, {
value: "14063000",
label: "Pauli"
}, {value: "14063020", label: "Depositio Erentrudis"}, {
value: "14070100",
label: "Octava Joannis Bapt."
}, {value: "14070100", label: "Octava Ioannis Bapt."}, {value: "14070200", label: "Visitatio Mariae"}, {
value: "14070208",
label: "Visitatio Mariae,8"
}, {value: "14070210", label: "Processi, Martiniani"}, {value: "14070300", label: "Transl. Thomae"}, {
value: "14070400",
label: "Transl. Martini"
}, {value: "14070420", label: "Udalrici"}, {value: "14070600", label: "Octava Apostolorum"}, {
value: "14070610",
label: "Goaris"
}, {value: "14070700", label: "Willibaldi"}, {value: "14070810", label: "Kiliani et Soc."}, {
value: "14070900",
label: "Oct.Visitatio Mariae"
}, {value: "14071000", label: "Septem Fratrum"}, {value: "14071100", label: "Transl. Benedicti"}, {
value: "14071108",
label: "Benedicti,8"
}, {value: "14071800", label: "Oct. Benedicti"}, {value: "14071200", label: "Hermagorae,Fortunati"}, {
value: "14071300",
label: "Henrici Imper."
}, {value: "14071200", label: "Hermagorae, Fortunati"}, {
value: "14071430",
label: "Nat. Thomae Cant."
}, {value: "14071510", label: "Divisio Apostolorum"}, {value: "14071700", label: "Alexis"}, {
value: "14071820",
label: "Mammae"
}, {value: "14072010", label: "Margaritae"}, {value: "14072100", label: "Praxedis"}, {
value: "14072200",
label: "Mariae Magdalenae"
}, {value: "14072320", label: "Apollinaris"}, {value: "14072400", label: "Christinae"}, {
value: "14072410",
label: "Vig. Jacobi"
}, {value: "14072410", label: "Vig. Iacobi"}, {value: "14072500", label: "Jacobi"}, {
value: "14072500",
label: "Iacobi"
}, {value: "14072510", label: "Christophori"}, {value: "14072610", label: "Annae"}, {
value: "14072700",
label: "Pantaleonis"
}, {value: "14072710", label: "Sept. Dorm. Eph."}, {value: "14072730", label: "Octava Margaritae"}, {
value: "14072900",
label: "Felicis"
}, {value: "14072910", label: "Octava Mariae Magdalenae"}, {
value: "14072920",
label: "Simplicii et Soc."
}, {value: "14072930", label: "Marthae"}, {value: "14073000", label: "Abdonis, Sennis"}, {
value: "14080120",
label: "Machabaeorum"
}, {value: "14080100", label: "Vincula Petri"}, {value: "14080200", label: "Stephani, Pont."}, {
value: "14080300",
label: "Inventio Stephani"
}, {value: "14080400", label: "Tertulini"}, {value: "14080420", label: "Transl. Valentini, Epi."}, {
value: "14080500",
label: "Afrae"
}, {value: "14080510", label: "Oswaldi, Reg."}, {value: "14080520", label: "Mariae ad Nives"}, {
value: "14080530",
label: "Donati, Epi. Mart."
}, {value: "14080530", label: "Donati"}, {value: "14080600", label: "Transfiguratio Dom."}, {
value: "14080610",
label: "Sixti"
}, {value: "14080620", label: "Felicissimi, Agapiti"}, {value: "14080800", label: "Cyriaci et Soc."}, {
value: "14080810",
label: "Iustini"
}, {value: "14080820", label: "Dominici"}, {value: "14080900", label: "Romani"}, {
value: "14080910",
label: "Vigilia Laurentii"
}, {value: "14081000", label: "Laurentii"}, {value: "14081008", label: "Laurentii,8"}, {
value: "14081100",
label: "Tiburtii, Susannae"
}, {value: "14081200", label: "Clarae"}, {value: "14081230", label: "Hilariae et Soc."}, {
value: "14081240",
label: "Dionysii ep."
}, {value: "14081300", label: "Hippolyti"}, {value: "14081330", label: "Cassiani"}, {
value: "14081400",
label: "Eusebii"
}, {value: "14081410", label: "Vig. Assump. Mariae"}, {value: "14081500", label: "Assumptio Mariae"}, {
value: "14081508",
label: "Assumptio Mariae,8"
}, {value: "14081700", label: "Octava Laurentii"}, {value: "14081800", label: "Agapiti"}, {
value: "14081808",
label: "Agapiti,8"
}, {value: "14082520", label: "Octava Agapiti"}, {value: "14081920", label: "Magni Tran."}, {
value: "14082010",
label: "Bernardi"
}, {value: "14082200", label: "Symphoriani"}, {value: "14082210", label: "Octava Assumptionis"}, {
value: "14082300",
label: "Timothei,Apollinaris"
}, {value: "14082320", label: "Vig. Bartholomaei"}, {value: "14082400", label: "Bartholomaei"}, {
value: "14082530",
label: "Genesii"
}, {value: "14082800", label: "Augustini"}, {value: "14082808", label: "Augustini,8"}, {
value: "14082820",
label: "Rufi"
}, {value: "14082840", label: "Pelagii"}, {value: "14082830", label: "Hermetis"}, {
value: "14082900",
label: "Decoll. Jo. Bapt."
}, {value: "14082900", label: "Decoll. Io. Bapt."}, {value: "14082910", label: "Sabinae"}, {
value: "14083000",
label: "Felicis, Adaucti"
}, {value: "14083110", label: "Paulini"}, {value: "14083130", label: "Octava Bartholomaei"}, {
value: "14090100",
label: "Aegidii"
}, {value: "14090130", label: "Verenae"}, {value: "14090220", label: "Transl. Gregorii"}, {
value: "14090200",
label: "Antonini"
}, {value: "14090230", label: "Nonnosi"}, {value: "14090400", label: "Octava Augustini"}, {
value: "14090430",
label: "Transl. Erentrudis"
}, {value: "14090500", label: "Transl. Sigismundi"}, {value: "14090610", label: "Magni"}, {
value: "14090710",
label: "Reginae"
}, {value: "14090720", label: "Vig. Nativitatis Mariae"}, {
value: "14090800",
label: "Nativitas Mariae"
}, {value: "14090808", label: "Nativitas Mariae,8"}, {value: "14090820", label: "Corbiniani"}, {
value: "14090900",
label: "Gorgonii"
}, {value: "14090910", label: "Tr. Kunegundis"}, {value: "14091000", label: "Adriani"}, {
value: "14091100",
label: "Proti, Hiacinthi"
}, {value: "14091400", label: "Exaltatio Crucis"}, {value: "14091510", label: "Octava Nat. Mariae"}, {
value: "14091530",
label: "Nicomedis"
}, {value: "14091600", label: "Cornelii, Cypriani"}, {value: "14091610", label: "Euphemiae"}, {
value: "14091640",
label: "Octava Corbiniani"
}, {value: "14091620", label: "Luciae et Germiniani"}, {
value: "14091620",
label: "Luciae, Germiniani"
}, {value: "14091700", label: "Lamberti"}, {value: "14091900", label: "Januarii"}, {
value: "14091900",
label: "Ianuarii"
}, {value: "14091930", label: "Lamberti Frisingensis"}, {value: "14092020", label: "Vig. Matthaei"}, {
value: "14092100",
label: "Matthaei"
}, {value: "14092200", label: "Mauritii"}, {value: "14092210", label: "Emmerami"}, {
value: "14092218",
label: "Emmerami,8"
}, {value: "14092820", label: "Oct. Emmerami"}, {value: "14092300", label: "Theclae"}, {
value: "14092310",
label: "Quadragesimi Assumptionis"
}, {value: "14092430", label: "Conceptio Io. Bapt.	"}, {
value: "14092430",
label: "Conceptio Jo. Bapt."
}, {value: "14092420", label: "Transl. Ruperti"}, {value: "14092450", label: "Kunialdi, Gislarii"}, {
value: "14092610",
label: "Transl. Virgilii"
}, {value: "14092600", label: "Justinae, Cypriani"}, {value: "14092600", label: "Iustinae, Cypriani"}, {
value: "14092700",
label: "Cosmae, Damiani"
}, {value: "14092800", label: "Wenceslai"}, {value: "14092900", label: "Michaelis"}, {
value: "14092908",
label: "Michaelis,8"
}, {value: "14093000", label: "Hieronimi"}, {value: "14100100", label: "Remigii"}, {
value: "14100110",
label: "Germani, Vedasti"
}, {value: "14100130", label: "Octava Ruperti"}, {value: "14100200", label: "Leodegarii"}, {
value: "14100400",
label: "Francisci"
}, {value: "14100600", label: "Fidis"}, {value: "14100610", label: "Octava Michaelis"}, {
value: "14100700",
label: "Marci, Pont."
}, {value: "14100720", label: "Transl. Wolfgangi"}, {value: "14100820", label: "Sergii, Bacchi"}, {
value: "14100860",
label: "Transl. Erhardi"
}, {value: "14100900", label: "Dionysii"}, {value: "14100908", label: "Dionysii,8"}, {
value: "14101510",
label: "Oct. Dionysii"
}, {value: "14101000", label: "Gereonis et Soc."}, {value: "14101120", label: "Transl. Augustini "}, {
value: "14101220",
label: "Maximiliani"
}, {value: "14101320", label: "Colomanni"}, {value: "14101400", label: "Callisti"}, {
value: "14101500",
label: "Leonardi iunioris"
}, {value: "14101600", label: "Galli"}, {value: "14101640", label: "Hedwigis"}, {
value: "14101700",
label: "Transl. Marthae"
}, {value: "14101800", label: "Lucae"}, {value: "14101910", label: "Januarii et Soc."}, {
value: "14101910",
label: "Ianuarii et Soc."
}, {value: "14101918", label: "Ianuarii, 8"}, {value: "14101918", label: "Januarii, 8"}, {
value: "14102620",
label: "Octava Ianuarii"
}, {value: "14102620", label: "Octava Ianuarii"}, {value: "14102100", label: "XI milium Virginum"}, {
value: "14102110",
label: "Ursulae"
}, {value: "14102120", label: "Hilarionis"}, {value: "14102200", label: "Severi, Epi."}, {
value: "14102300",
label: "Severini, Epi."
}, {value: "14102500", label: "Crispini,Crispiniani"}, {value: "14102600", label: "Ordinatio Amandi"}, {
value: "14102700",
label: "Vig. Simonis, Judae"
}, {value: "14102700", label: "Vig. Simonis, Iudae"}, {value: "14102800", label: "Simonis, Judae"}, {
value: "14102800",
label: "Simonis, Iudae"
}, {value: "14102900", label: "Narcissi"}, {value: "14103120", label: "Vig. Omnium Sanctorum"}, {
value: "14103130",
label: "Wolfgangi"
}, {value: "14103138", label: "Wolfgangi,8"}, {value: "14110710", label: "Oct. Wolfgangi"}, {
value: "14103100",
label: "Quintini"
}, {value: "14110100", label: "Omnium Sanctorum"}, {value: "14110108", label: "Omnium Sanctorum,8"}, {
value: "14110130",
label: "Caesarii, Juliani"
}, {value: "14110200", label: "Eustachii"}, {value: "14110220", label: "Omn. Fidel. Defunct."}, {
value: "14110300",
label: "Pirmini"
}, {value: "14110500", label: "Transl. Emmerami"}, {value: "14110610", label: "Leonardi"}, {
value: "14110700",
label: "Willibrordi"
}, {value: "14110800", label: "Quat. Coronatorum"}, {value: "14110810", label: "Oct. Om. Sanctorum"}, {
value: "14110910",
label: "Theodori Tiro"
}, {value: "14111010", label: "Martini, Pont."}, {value: "14111100", label: "Martini"}, {
value: "14111108",
label: "Martini,8"
}, {value: "14111110", label: "Mennae"}, {value: "14111220", label: "Arsacii"}, {
value: "14111300",
label: "Briccii"
}, {value: "14111520", label: "Leopoldi"}, {value: "14111600", label: "Othmari"}, {
value: "14111720",
label: "Florini"
}, {value: "14111800", label: "Octava Martini"}, {value: "14111900", label: "Elisabeth Hung."}, {
value: "14112020",
label: "Transl. Corbiniani"
}, {value: "14112100", label: "Praesentatio Mariae"}, {value: "14112200", label: "Caeciliae"}, {
value: "14112210",
label: "Octava Leopoldi"
}, {value: "14112300", label: "Clementis"}, {value: "14112310", label: "Felicitatis"}, {
value: "14112330",
label: "Columbani"
}, {value: "14112400", label: "Chrysogoni"}, {value: "14112500", label: "Catharinae"}, {
value: "14112600",
label: "Lini"
}, {value: "14112620", label: "Conradi"}, {value: "14112710", label: "Depositio Virgilii"}, {
value: "14112900",
label: "Saturnini"
}, {value: "14112910", label: "Chrysanthi, Dariae"}, {value: "14112920", label: "Vig. Andreae"}, {
value: "14113000",
label: "Andreae"
}, {value: "14113008", label: "Andreae,8"}, {value: "14111400", label: "Vigilia Findani"}, {
value: "14111528",
label: "Leopoldi, 8"
}, {value: "14111530", label: "Findani"}, {value: "14120110", label: "Candidi"}, {
value: "14120200",
label: "Octava Catharinae"
}, {value: "14120400", label: "Barbarae"}, {value: "14120420", label: "Octava Virgilii"}, {
value: "14120430",
label: "Transl. Dionysii"
}, {value: "14120600", label: "Nicolai"}, {value: "14120710", label: "Octava Andreae"}, {
value: "14120730",
label: "Transl. Ambrosii"
}, {value: "14120800", label: "Conceptio Mariae"}, {value: "14121500", label: "Octava Concep.Mariae"}, {
value: "14120820",
label: "Zenonis"
}, {value: "14121100", label: "Damasi"}, {value: "14121300", label: "Luciae"}, {
value: "14121330",
label: "Iudoci"
}, {value: "14121340", label: "Odiliae"}, {value: "14122100", label: "Thomae Apost."}, {
value: "14122200",
label: "Vig. Thomae Apost."
}, {value: "14122900", label: "Thomae Cant."}, {value: "14123100", label: "Silvestri"}, {
value: "15008000",
label: "De BMV"
}, {value: "15008010", label: "De BMV Adv."}, {value: "15008030", label: "De BMV Nat."}, {
value: "15008080",
label: "De BMV TP"
}, {value: "16004000", label: "Invitatoria"}, {value: "16011000", label: "In Dedic. Altaris"}, {
value: "17001000",
label: "Additamenta"
}, {value: "99999999", label: "Vigilia Ascensio Dom."}, {value: "99999998", label: "Viginti Quattuor Senatorum"},{value: "00000000", label: "Commentarius"}
            ],
            type: "autocomplete",
            id: "1233333as",
            placeHolder: "Fest wählen",
            parameter: "",
            required:true
          }
        ]
      }
    ]
  },

  
}



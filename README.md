[![Build Status](https://travis-ci.org/mmjmanders/ng-iban.svg?branch=master)](https://travis-ci.org/mmjmanders/ng-iban)

# ng-iban - validate input fields as IBAN
The goals is to provide an easy way to validate an input field as an IBAN number with [AngularJS](https://angularjs.org/).

## Usage
First add

- `AngularJS`
- `ng-iban`

to your HTML file.

Make sure you require `mm.iban` as a dependency of your AngularJS module.

## Installation
`bower install ng-iban`

### directive
```html
<input type="text" ng-model="iban" ng-iban/>
```

or

```html
<input type="text" ng-model="iban" ng-iban="[Country code]"/>
```

where `[Country code]` is one of the country codes from the table below.

To use this directive the `ngModel` directive must also be used because this directive depends on it.

## Predefined countries
Country | Country code | IBAN format | IBAN length | IBAN example
------- | ------------ | ----------- | ----------- | ------------
Albania | AL | AL[0-9]{2}[0-9]{8}[A-Z0-9]{16} | 28 | AL47212110090000000235698741
Andorra | AD | AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12} | 24 | AD1200012030200359100100
Austria | AT | AT[0-9]{2}[0-9]{5}[0-9]{11} | 20 | AT611904300234573201
Azerbaijan, Republic of | AZ | AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20} | 28 | AZ21NABZ00000000137010001944
Bahrain | BH | BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14} | 22 | BH67BMAG00001299123456
Belgium | BE | BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2} | 16 | BE68539007547034
Bosnia and Herzegovina | BA | BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2} | 20 | BA391290079401028494
Brazil | BR | BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z]{1}[A-Z0-9]{1} | 29 | BR7724891749412660603618210F3
Bulgaria | BG | BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8} | 22 | BG80BNBG96611020345678
Costa Rica | CR | CR[0-9]{2}[0-9]{3}[0-9]{14} | 21 | CR0515202001026284066
Croatia | HR | HR[0-9]{2}[0-9]{7}[0-9]{10} | 21 | HR1210010051863000160
Cyprus | CY | CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16} | 28 | CY17002001280000001200527600
Czech Republic | CZ | CZ[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10} | 24 | CZ6508000000192000145399
Denmark | DK | DK[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1} | 18 | DK5000400440116243
Dominican Republic | DO | DO[0-9]{2}[A-Z0-9]{4}[0-9]{20} | 28 | DO28BAGR00000001212453611324
Estonia | EE | EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1} | 20 | EE382200221020145685
Faroe Islands | FO | FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1} | 18 | FO6264600001631634
Finland | FI | FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1} | 18 | FI2112345600000785
France | FR | FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2} | 27 | FR1420041010050500013M02606
Georgia | GE | GE[0-9]{2}[A-Z]{2}[0-9]{16} | 22 | GE29NB0000000101904917
Germany | DE | DE[0-9]{2}[0-9]{8}[0-9]{10} | 22 | DE89370400440532013000
Gibraltar | GI | GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15} | 23 | GI75NWBK000000007099453
Greece | GR | GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16} | 27 | GR1601101250000000012300695
Greenland | GL | GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1} | 18 | GL8964710001000206
Guatemala | GT | GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20} | 28 | GT82TRAJ01020000001210029690
Hungary | HU | HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1} | 28 | HU42117730161111101800000000
Iceland | IS | IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10} | 26 | IS140159260076545510730339
Ireland | IE | IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8} | 22 | IE29AIBK93115212345678
Israel | IL | IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13} | 23 | IL620108000000099999999
Italy | IT | IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12} | 27 | IT60X0542811101000000123456
Kazakhstan | KZ | KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13} | 20 | KZ86125KZT5004100100
Kuwait | KW | KW[0-9]{2}[A-Z]{4}[A-Z0-9]{22} | 30 | KW81CBKU0000000000001234560101
Latvia | LV | LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13} | 21 | LV80BANK0000435195001
Lebanon | LB | LB[0-9]{2}[0-9]{4}[A-Z0-9]{20} | 28 | LB62099900000001001901229114
Liechtenstein (Principality of) | LI | LI[0-9]{2}[0-9]{5}[A-Z0-9]{12} | 21 | LI21088100002324013AA
Lithuania | LT | LT[0-9]{2}[0-9]{5}[0-9]{11} | 20 | LT121000011101001000
Luxembourg | LU | LU[0-9]{2}[0-9]{3}[A-Z0-9]{13} | 20 | LU280019400644750000
Macedonia | MK | MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2} | 19 | MK07250120000058984
Malta | MT | MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18} | 31 | MT84MALT011000012345MTLCAST001S
Mauritania | MR | MR[0-9]{2}[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2} | 27 | MR1300020001010000123456753
Mauritius | MU | MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3} | 30 | MU17BOMM0101101030300200000MUR
Moldova, Republic of | MD | MD[0-9]{2}[A-Z0-9]{20} | 24 | MD24AG000225100013104168
Monaco | MC | MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2} | 27 | MC5811222000010123456789030
Montenegro | ME | ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2} | 22 | ME25505000012345678951
Netherlands | NL | NL[0-9]{2}[A-Z]{4}[0-9]{10} | 18 | NL91ABNA0417164300
Norway | NO | NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1} | 15 | NO9386011117947
Pakistan | PK | PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16} | 24 | PK36SCBL0000001123456702
Poland | PL | PL[0-9]{2}[0-9]{8}[0-9]{16} | 28 | PL61109010140000071219812874
Palestinian Territory, Occupied | PS | PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21} | 29 | PS92PALS000000000400123456702
Portugal | PT | PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2} | 25 | PT50000201231234567890154
Qatar | QA | QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21} | 29 | QA58DOHB00001234567890ABCDEFG
Romania | RO | RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16} | 24 | RO49AAAA1B31007593840000
San Marino | SM | SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12} | 27 | SM86U0322509800000000270100
Saudi Arabia | SA | SA[0-9]{2}[0-9]{2}[A-Z0-9]{18} | 24 | SA0380000000608010167519
Serbia | RS | RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2} | 22 | RS35260005601001611379
Slovak Republic | SK | SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10} | 24 | SK3112000000198742637541
Slovenia | SI | SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2} | 19 | SI56263300012039086
Spain | ES | ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10} | 24 | ES9121000418450200051332
Sweden | SE | SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1} | 24 | SE4550000000058398257466
Switzerland | CH | CH[0-9]{2}[0-9]{5}[A-Z0-9]{12} | 21 | CH9300762011623852957
Timor-Leste | TL | TL[0-9]{2}[0-9]{3}[0-9]{14}[0-9]{2} | 23 | TL380080012345678910157
Tunisia | TN | TN[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2} | 24 | TN5910006035183598478831
Turkey | TR | TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16} | 26 | TR330006100519786457841326
United Arab Emirates | AE | AE[0-9]{2}[0-9]{3}[0-9]{16} | 23 | AE070331234567890123456
United Kingdom | GB | GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8} | 22 | GB29NWBK60161331926819
Virgin Islands, British | VG | VG[0-9]{2}[A-Z]{4}[0-9]{16} | 24 | VG96VPVG0000012345678901

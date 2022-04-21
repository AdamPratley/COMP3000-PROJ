sudo ovs-vsctl set port s1-eth1 qos=@newqos -- --id=@newqos create qos type=linux-htb other-config:max-rate=10000000 queues=1=@q1,2=@q2,3=@q3,4=@q4,5=@q5,6=@q6,7=@q7,8=@q8,9=@q9,10=@q10,11=@q11,12=@q12,13=@q13,14=@q14,15=@q15,16=@q16,17=@q17,18=@q18,19=@q19,20=@q20,21=@q21,22=@q22,23=@q23,24=@q24,25=@q25,26=@q26,27=@q27,28=@q28,29=@q29,30=@q30,31=@q31,32=@q32,33=@q33,34=@q34,35=@q35,36=@q36,37=@q37,38=@q38,39=@q39,40=@q40,41=@q41,42=@q42,43=@q43,44=@q44,45=@q45,46=@q46,47=@q47,48=@q48,49=@q49,50=@q50,51=@q51,52=@q52,53=@q53,54=@q54,55=@q55,56=@q56,57=@q57,58=@q58,59=@q59,60=@q60,61=@q61,62=@q62,63=@q63,64=@q64,65=@q65,66=@q66,67=@q67,68=@q68,69=@q69,70=@q70,71=@q71,72=@q72,73=@q73,74=@q74,75=@q75,76=@q76,77=@q77,78=@q78,79=@q79,80=@q80,81=@q81,82=@q82,83=@q83,84=@q84,85=@q85,86=@q86,87=@q87,88=@q88,89=@q89,90=@q90,91=@q91,92=@q92,93=@q93,94=@q94,95=@q95,96=@q96,97=@q97,98=@q98,99=@q99,100=@q100 -- --id=@q1 create queue other-config:min-rate=100000 other-config:max-rate=100000 -- --id=@q2 create queue other-config:min-rate=200000 other-config:max-rate=200000 -- --id=@q3 create queue other-config:min-rate=300000 other-config:max-rate=300000 -- --id=@q4 create queue other-config:min-rate=400000 other-config:max-rate=400000 -- --id=@q5 create queue other-config:min-rate=500000 other-config:max-rate=500000 -- --id=@q6 create queue other-config:min-rate=600000 other-config:max-rate=600000 -- --id=@q7 create queue other-config:min-rate=700000 other-config:max-rate=700000 -- --id=@q8 create queue other-config:min-rate=800000 other-config:max-rate=800000 -- --id=@q9 create queue other-config:min-rate=900000 other-config:max-rate=900000 -- --id=@q10 create queue other-config:min-rate=1000000 other-config:max-rate=1000000 -- --id=@q11 create queue other-config:min-rate=1100000 other-config:max-rate=1100000 -- --id=@q12 create queue other-config:min-rate=1200000 other-config:max-rate=1200000 -- --id=@q13 create queue other-config:min-rate=1300000 other-config:max-rate=1300000 -- --id=@q14 create queue other-config:min-rate=1400000 other-config:max-rate=1400000 -- --id=@q15 create queue other-config:min-rate=1500000 other-config:max-rate=1500000 -- --id=@q16 create queue other-config:min-rate=1600000 other-config:max-rate=1600000 -- --id=@q17 create queue other-config:min-rate=1700000 other-config:max-rate=1700000 -- --id=@q18 create queue other-config:min-rate=1800000 other-config:max-rate=1800000 -- --id=@q19 create queue other-config:min-rate=1900000 other-config:max-rate=1900000 -- --id=@q20 create queue other-config:min-rate=2000000 other-config:max-rate=2000000 -- --id=@q21 create queue other-config:min-rate=2100000 other-config:max-rate=2100000 -- --id=@q22 create queue other-config:min-rate=2200000 other-config:max-rate=2200000 -- --id=@q23 create queue other-config:min-rate=2300000 other-config:max-rate=2300000 -- --id=@q24 create queue other-config:min-rate=2400000 other-config:max-rate=2400000 -- --id=@q25 create queue other-config:min-rate=2500000 other-config:max-rate=2500000 -- --id=@q26 create queue other-config:min-rate=2600000 other-config:max-rate=2600000 -- --id=@q27 create queue other-config:min-rate=2700000 other-config:max-rate=2700000 -- --id=@q28 create queue other-config:min-rate=2800000 other-config:max-rate=2800000 -- --id=@q29 create queue other-config:min-rate=2900000 other-config:max-rate=2900000 -- --id=@q30 create queue other-config:min-rate=3000000 other-config:max-rate=3000000 -- --id=@q31 create queue other-config:min-rate=3100000 other-config:max-rate=3100000 -- --id=@q32 create queue other-config:min-rate=3200000 other-config:max-rate=3200000 -- --id=@q33 create queue other-config:min-rate=3300000 other-config:max-rate=3300000 -- --id=@q34 create queue other-config:min-rate=3400000 other-config:max-rate=3400000 -- --id=@q35 create queue other-config:min-rate=3500000 other-config:max-rate=3500000 -- --id=@q36 create queue other-config:min-rate=3600000 other-config:max-rate=3600000 -- --id=@q37 create queue other-config:min-rate=3700000 other-config:max-rate=3700000 -- --id=@q38 create queue other-config:min-rate=3800000 other-config:max-rate=3800000 -- --id=@q39 create queue other-config:min-rate=3900000 other-config:max-rate=3900000 -- --id=@q40 create queue other-config:min-rate=4000000 other-config:max-rate=4000000 -- --id=@q41 create queue other-config:min-rate=4100000 other-config:max-rate=4100000 -- --id=@q42 create queue other-config:min-rate=4200000 other-config:max-rate=4200000 -- --id=@q43 create queue other-config:min-rate=4300000 other-config:max-rate=4300000 -- --id=@q44 create queue other-config:min-rate=4400000 other-config:max-rate=4400000 -- --id=@q45 create queue other-config:min-rate=4500000 other-config:max-rate=4500000 -- --id=@q46 create queue other-config:min-rate=4600000 other-config:max-rate=4600000 -- --id=@q47 create queue other-config:min-rate=4700000 other-config:max-rate=4700000 -- --id=@q48 create queue other-config:min-rate=4800000 other-config:max-rate=4800000 -- --id=@q49 create queue other-config:min-rate=4900000 other-config:max-rate=4900000 -- --id=@q50 create queue other-config:min-rate=5000000 other-config:max-rate=5000000 -- --id=@q51 create queue other-config:min-rate=5100000 other-config:max-rate=5100000 -- --id=@q52 create queue other-config:min-rate=5200000 other-config:max-rate=5200000 -- --id=@q53 create queue other-config:min-rate=5300000 other-config:max-rate=5300000 -- --id=@q54 create queue other-config:min-rate=5400000 other-config:max-rate=5400000 -- --id=@q55 create queue other-config:min-rate=5500000 other-config:max-rate=5500000 -- --id=@q56 create queue other-config:min-rate=5600000 other-config:max-rate=5600000 -- --id=@q57 create queue other-config:min-rate=5700000 other-config:max-rate=5700000 -- --id=@q58 create queue other-config:min-rate=5800000 other-config:max-rate=5800000 -- --id=@q59 create queue other-config:min-rate=5900000 other-config:max-rate=5900000 -- --id=@q60 create queue other-config:min-rate=6000000 other-config:max-rate=6000000 -- --id=@q61 create queue other-config:min-rate=6100000 other-config:max-rate=6100000 -- --id=@q62 create queue other-config:min-rate=6200000 other-config:max-rate=6200000 -- --id=@q63 create queue other-config:min-rate=6300000 other-config:max-rate=6300000 -- --id=@q64 create queue other-config:min-rate=6400000 other-config:max-rate=6400000 -- --id=@q65 create queue other-config:min-rate=6500000 other-config:max-rate=6500000 -- --id=@q66 create queue other-config:min-rate=6600000 other-config:max-rate=6600000 -- --id=@q67 create queue other-config:min-rate=6700000 other-config:max-rate=6700000 -- --id=@q68 create queue other-config:min-rate=6800000 other-config:max-rate=6800000 -- --id=@q69 create queue other-config:min-rate=6900000 other-config:max-rate=6900000 -- --id=@q70 create queue other-config:min-rate=7000000 other-config:max-rate=7000000 -- --id=@q71 create queue other-config:min-rate=7100000 other-config:max-rate=7100000 -- --id=@q72 create queue other-config:min-rate=7200000 other-config:max-rate=7200000 -- --id=@q73 create queue other-config:min-rate=7300000 other-config:max-rate=7300000 -- --id=@q74 create queue other-config:min-rate=7400000 other-config:max-rate=7400000 -- --id=@q75 create queue other-config:min-rate=7500000 other-config:max-rate=7500000 -- --id=@q76 create queue other-config:min-rate=7600000 other-config:max-rate=7600000 -- --id=@q77 create queue other-config:min-rate=7700000 other-config:max-rate=7700000 -- --id=@q78 create queue other-config:min-rate=7800000 other-config:max-rate=7800000 -- --id=@q79 create queue other-config:min-rate=7900000 other-config:max-rate=7900000 -- --id=@q80 create queue other-config:min-rate=8000000 other-config:max-rate=8000000 -- --id=@q81 create queue other-config:min-rate=8100000 other-config:max-rate=8100000 -- --id=@q82 create queue other-config:min-rate=8200000 other-config:max-rate=8200000 -- --id=@q83 create queue other-config:min-rate=8300000 other-config:max-rate=8300000 -- --id=@q84 create queue other-config:min-rate=8400000 other-config:max-rate=8400000 -- --id=@q85 create queue other-config:min-rate=8500000 other-config:max-rate=8500000 -- --id=@q86 create queue other-config:min-rate=8600000 other-config:max-rate=8600000 -- --id=@q87 create queue other-config:min-rate=8700000 other-config:max-rate=8700000 -- --id=@q88 create queue other-config:min-rate=8800000 other-config:max-rate=8800000 -- --id=@q89 create queue other-config:min-rate=8900000 other-config:max-rate=8900000 -- --id=@q90 create queue other-config:min-rate=9000000 other-config:max-rate=9000000 -- --id=@q91 create queue other-config:min-rate=9100000 other-config:max-rate=9100000 -- --id=@q92 create queue other-config:min-rate=9200000 other-config:max-rate=9200000 -- --id=@q93 create queue other-config:min-rate=9300000 other-config:max-rate=9300000 -- --id=@q94 create queue other-config:min-rate=9400000 other-config:max-rate=9400000 -- --id=@q95 create queue other-config:min-rate=9500000 other-config:max-rate=9500000 -- --id=@q96 create queue other-config:min-rate=9600000 other-config:max-rate=9600000 -- --id=@q97 create queue other-config:min-rate=9700000 other-config:max-rate=9700000 -- --id=@q98 create queue other-config:min-rate=9800000 other-config:max-rate=9800000 -- --id=@q99 create queue other-config:min-rate=9900000 other-config:max-rate=9900000 -- --id=@q100 create queue other-config:min-rate=10000000 other-config:max-rate=10000000
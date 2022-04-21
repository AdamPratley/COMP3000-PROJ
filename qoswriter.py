#make qos policy, 10Mbps limit, 100 queues ranging 100kbps to 10Mbps
strt = "sudo ovs-vsctl set port s1-eth1 qos=@newqos -- --id=@newqos create qos type=linux-htb other-config:max-rate=10000000 "
ques = "queues="
queueconf = ""

def makeque(i,rate):    
    return (" -- --id=@q"+str(i)+" create queue other-config:min-rate="+str(rate)+" other-config:max-rate="+str(rate))

baserate = 100000 #kbps

for i in range(1,101):
    if i == 100:
        ques += str(i)+"=@q"+str(i)
    else:
        ques += str(i)+"=@q"+str(i)+","
    queueconf += makeque(i,baserate*i)

final = strt + ques + queueconf

with open('qos100.txt', 'w') as f:
    f.write(final)
    f.close()


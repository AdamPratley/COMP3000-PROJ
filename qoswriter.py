import sys
import os, platform

def err():
    print("Proper Usage:\nqoswriter.py Int Int\nInts = Start, End in Kpbs")
    exit()
    
def makequeue(i,rate):    
    return (" -- --id=@q"+str(i)+" create queue other-config:min-rate="+str(rate)+" other-config:max-rate="+str(rate))

def writer(start,end):
    try:
        start = int(start)
        end = int(end)
    except:
        err()

    if start > end:
        err()
        
    start *= 1000
    end *= 1000
    
    step = (end - start) / 99

    strt = "sudo ovs-vsctl set port s1-eth1 qos=@newqos -- --id=@newqos create qos type=linux-htb other-config:max-rate=" + str(end) + " "
    ques = "queues="
    queueconf = ""
    
    for i in range(1,101):
        if i == 100:
            ques += str(i)+"=@q"+str(i)
        else:
            ques += str(i)+"=@q"+str(i)+","
        queueconf += makequeue(i,int(start))
        start+= step

    final = strt + ques + queueconf
    with open('qos100.txt', 'w+') as f:
        f.write("sudo ovs-vsctl --all destroy qos\n")
        f.write("sudo ovs-vsctl --all destroy queue\n")
        f.write(final)
        f.close()

if __name__ == "__main__":
    try:
        writer(sys.argv[1],sys.argv[2])
        if platform.system() == "Windows":
            print("*Cannot add permissions in windows*")
            print(os.popen("rename qos100.txt qos100.sh").read())
        elif os.system == "Linux":
            print(os.popen("mv qos100.txt qos100.sh").read())
            print(os.popen("chmod +x qos100.sh").read())
        else:
            print("System must be Linux or Windows")
            
    except:
        err()

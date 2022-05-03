import sys, json, os, platform

def writeConfig(Min,Max,step):
    try:    
        with open('config.json','x') as f:
            print('File Created')
            f.close()
    except:
        print("File Exists...")
        
    with open('config.json', 'r+') as f:
        
        content = f.read()
        
        if content == "":
            print('Writing Config...')
            
            content = {
                "min": Min,
                "max": Max,
                "step": step,
                }
            
            json.dump(content, f)
            f.close()
        else:
            print('Overwriting Config...')
            
            content = json.loads(content)
            
            content["min"] = Min
            content["max"] = Max
            content["step"] = step
            
            f.seek(0)
            json.dump(content, f)
            f.truncate()
            f.close()
            
    print("Done.")
    
def makeQueue(i,rate):    
    return (" -- --id=@q"+str(i)+" create queue other-config:min-rate="+str(rate)+" other-config:max-rate="+str(rate))

def writeQos(start,end):
    try:
        start = int(start)
        end = int(end)
    except ValueError:
        raise Exception("Args must be int") 

    if start > end:
        raise Exception("Arg2 must be greater than Arg1")

    
    startKbps = start * 1000
    endKbps = end * 1000
    
    stepKbps = (endKbps - startKbps) / 99

    strt = "sudo ovs-vsctl set port s1-eth1 qos=@newqos -- --id=@newqos create qos type=linux-htb other-config:max-rate=" + str(endKbps) + " "
    ques = "queues="
    queueConf = ""
    
    for i in range(1,101):
        if i == 100:
            ques += str(i)+"=@q"+str(i)
        else:
            ques += str(i)+"=@q"+str(i)+","
        queueConf += makeQueue(i,int(startKbps))
        startKbps+= stepKbps

    final = strt + ques + queueConf
    
    with open('qos100.txt', 'w') as f:
        f.write("sudo ovs-vsctl --all destroy qos\n")
        f.write("sudo ovs-vsctl --all destroy queue\n")
        f.write(final)
        f.close()

    writeConfig(start,end,int(stepKbps/1000))

if __name__ == "__main__":
    try:
        writeQos(sys.argv[1],sys.argv[2])
    except:
        raise Exception("Proper Usage:\nqoswriter.py Int Int\nInts = Start, End in Kpbs")
    
    if platform.system() == "Windows":
        print("*Cannot add permissions in windows*")
        print(os.popen("rename qos100.txt qos100.sh").read())
        
    elif platform.system() == "Linux":
        print(os.popen("mv qos100.txt qos100.sh").read())
        print(os.popen("chmod +x qos100.sh").read())
        
    else:
        print("System must be Linux or Windows")
            
    

# A Web Based Platform to Evaluate Video Streaming Over a Software Defined Network
This Project spanned an academic year exploring technologies such as Mininet for Software Defined Networking, DASHjs for Dynamic Adaptive Streaming over HTTP, with a look into WebRTC (Web Real-Time Communication) for live webcam streaming and OpenDayLight as a REST API for controlling Software Defined Networks programmatically.


# Requirements and Setup
A Hypervisor suchas;<br />
https://www.vmware.com/uk/products/workstation-player/workstation-player-evaluation.html

The Latest Mininet VM (20.04) and browser of your choice; <br />
https://github.com/mininet/mininet/releases/ <br />
Latest Version (100) of Google Chrome; <br />
https://www.google.com/chrome/?platform=linux <br />
Or an older version (68) of Firefox (Not Reccomended); <br />
https://ftp.mozilla.org/pub/firefox/releases/ <br />
(Latest Version of Firefox is too slow over xterm)

### Enabling X11 in Mininet VM (20.04) 
~~~
~$ sudo vi /etc/ssh/sshd_config
~~~
Remove the # for X11Forwarding, X11DisplayOffset and X11UseLocalhost <br />
Then Save with Esc then :wq <br />
~~~
~$ sudo vi /etc/ssh/ssh_config
~~~
Find 'ForwardX11' <br />
Remove the '#' <br />
Finally replace 'no' with 'yes' <br />

### Set $DISPLAY Environment Variable 
If the following command returns empty
~~~
~$ echo $DISPLAY
~~~
Then enter this
~~~
~$ export DISPLAY=localhost:10.0
~~~
Starting Mininet Network with 2 Hosts (Replace x's with IP of OpenDayLight VM)
~~~
~$ sudo mn -x --mac --nat --topo single,2 --controller=remote,ip=192.168.xx.xx,port=6633
~~~
When Exiting Mininet do;
~~~
mininet> exit
~$ sudo mn -c
~~~
###QoS Policies
Run the qos100.sh script in the switch 's1'
~~~
~$ chmod +x qos100.sh
~$ ./qos100.sh
~~~
The qos100.sh script will automatically clean up old QoS Policies on execution, this must be executed on start.

An Ubuntu Server VM with OpenDayLight; <br />
https://ubuntu.com/download/server <br />
https://docs.opendaylight.org/en/stable-phosphorus/downloads.html <br />
OpenDaylight should be ran with; <br />
~~~
~$ cd odl/bin
~$ ./karaf
~~~
MobaXterm available here; <br />
https://mobaxterm.mobatek.net/download.html <br />
Set X11 remote access to 'Full'  <br />
Settings > Configuration > X11 > X11 remote access

If for whatever reason you choose to use a different version than recommended then I cannot guarantee an absence of version clashes or at least frontend or setup discrepancies.

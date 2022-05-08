# A Web Based Platform to Evaluate Video Streaming Over a Software Defined Network
This Project spanned an academic year exploring technologies such as Mininet for Software Defined Networking, DASHjs for Dynamic Adaptive Streaming over HTTP, with a look into WebRTC (Web Real-Time Communication) for live webcam streaming and using the OpenDayLight REST API to Open VSwitch queues programmatically.


# Requirements and Setup/ User Guide
VMware Workstation Player;<br />
https://www.vmware.com/uk/products/workstation-player/workstation-player-evaluation.html

Mininet VM (16.04); <br />
https://github.com/mininet/mininet/releases/ <br />
Google Chrome (Latest); <br />
https://www.google.com/chrome/?platform=linux <br />
~~~
~$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
~$ sudo dpkg -i google-chrome-stable_current_amd64.deb
~$ sudo apt-get install -f
~~~
### Install X11 in Mininet VM 
~~~
~$ sudo apt-get install xorg
~~~
### Install MySQL in Mininet VM
~~~
~$ sudo apt-get install mysql
~~~
use the password 'admin' for simplicity<br>
Login with
~~~
~$ mysql -u root -p
~~~
Enter this to allow login by nodejs
~~~
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';
~~~
The Create the database with...
~~~
mysql> CREATE DATABASE main;
mysql> CREATE TABLE sessions (id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, link VARCHAR(255) NOT NULL, xValues JSON NOT NULL, redY JSON NOT NULL, greenY JSON NOT NULL);
~~~
Ensure sql server has stopped before starting SDN
~~~
~$ sudo systemctl stop mysql
~~~
start sql server in h2
~~~
~$ sudo systemctl start mysql
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
### QoS Policies
Run the qos100.sh script in the switch 's1'
~~~
~$ python3 qoswriter.py minBandwidth maxBandwidth
~$ ./qos100.sh
~~~
The qos100.sh script will automatically clean up old QoS Policies on execution, this must be executed on start.

### OpenDayLight
An Ubuntu Server VM with OpenDayLight; <br />
https://ubuntu.com/download/server <br />
https://docs.opendaylight.org/en/stable-phosphorus/downloads.html <br />
OpenDaylight should be ran with; <br />
~~~
~$ cd odl/bin
~$ ./karaf
~~~
### MobaXterm
MobaXterm available here; <br />
https://mobaxterm.mobatek.net/download.html <br />
Set X11 remote access to 'Full'  <br />
Settings > Configuration > X11 > X11 remote access

### Nodejs and npm
install nodejs and npm with
~~~
~$ sudo apt-get install nodejs
~$ sudo apt-get install npm
~~~
run npm in the same directory with package.json to install depedancies
~~~
~$ npm install
~~~
Starting node project in h2
~~~
~$ nodejs app.js
~~~
Start Google Chrome from h1 navigate to 10.0.0.2:8080
~~~
~$ google-chrome
~~~

If for whatever reason you choose to use a different version than recommended then I cannot guarantee an absence of version clashes or at least frontend visual or setup discrepancies.

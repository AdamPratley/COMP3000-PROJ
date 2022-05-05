# A Web Based Platform to Evaluate Video Streaming Over a Software Defined Network
This Project spanned an academic year exploring technologies such as Mininet for Software Defined Networking, DASHjs for Dynamic Adaptive Streaming over HTTP, with a look into WebRTC (Web Real-Time Communication) for live webcam streaming and OpenDayLight as a REST API for controlling Software Defined Networks programmatically.


# Requirements and Setup
VMware Workstation Player;<br />
https://www.vmware.com/uk/products/workstation-player/workstation-player-evaluation.html

Mininet VM (16.04); <br />
https://github.com/mininet/mininet/releases/ <br />
Google Chrome (Latest); <br />
https://www.google.com/chrome/?platform=linux <br />


### Install X11 in Mininet VM 
~~~
~$ sudo apt-get install xorg
~~~

### Install MySql in Mininet VM
~~~
~$ sudo apt-get install mysql
~~~
use the password 'admin' for simplicity<br>
Change bind-address from 127.0.0.1 to 0.0.0.0
~~~
~$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
~~~
Then restart mysql
~~~
~$ sudo systemctl restart mysql
~~~
Login with
~~~
~$ mysql -u root -p
~~~
Enter this to allow login
~~~
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';
~~~
The Create the database with...
~~~
mysql> CREATE DATABASE main;
mysql> CREATE TABLE sessions (id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, link VARCHAR(255) NOT NULL, xValues JSON NOT NULL, redY JSON NOT NULL, greenY JSON NOT NULL);
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
~$ python3 qoswriter.py min max
~$ chmod +x qos100.sh
~$ ./qos100.sh
~~~
The qos100.sh script will automatically clean up old QoS Policies on execution, this must be executed on start.

###OpenDayLight
An Ubuntu Server VM with OpenDayLight; <br />
https://ubuntu.com/download/server <br />
https://docs.opendaylight.org/en/stable-phosphorus/downloads.html <br />
OpenDaylight should be ran with; <br />
~~~
~$ cd odl/bin
~$ ./karaf
~~~
###MobaXterm
MobaXterm available here; <br />
https://mobaxterm.mobatek.net/download.html <br />
Set X11 remote access to 'Full'  <br />
Settings > Configuration > X11 > X11 remote access

If for whatever reason you choose to use a different version than recommended then I cannot guarantee an absence of version clashes or at least frontend or setup discrepancies.

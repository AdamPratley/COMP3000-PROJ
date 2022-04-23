function sendPut(id){
    var xhr = new XMLHttpRequest();
    var url = "http://"+odlAddr+":8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/table/0/flow/iperf";
    xhr.open("PUT", url);

    xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
    xhr.setRequestHeader("Content-Type", "application/xml");

    var data = `<flow xmlns="urn:opendaylight:flow:inventory">
    <id>iperf</id>
    <instructions>
    <instruction>
    <order>0</order>
    <apply-actions>
    <action>
    <order>1</order>
    <output-action>
        <output-node-connector>NORMAL</output-node-connector>
        <max-length>65535</max-length>
    </output-action>
    </action>
    <action>
    <order>0</order>
    <set-queue-action>
        <queue-id>${id}</queue-id>
    </set-queue-action>
    </action>
    </apply-actions>
    </instruction>
    </instructions>
    <barrier>true</barrier>
    <flow-name>iperf</flow-name>
    <match>
    <ethernet-match>
                <ethernet-type>
                    <type>2048</type>
                </ethernet-type>
            </ethernet-match>
            <ipv4-source>10.0.0.2/32</ipv4-source>
            <ipv4-destination>10.0.0.1/32</ipv4-destination>
            <ip-match>
                <ip-protocol>6</ip-protocol>         
            </ip-match>
            <tcp-destination-port>12345</tcp-destination-port>
    </match>
    <hard-timeout>0</hard-timeout>
    <priority>32768</priority>
    <table_id>0</table_id>
    <idle-timeout>0</idle-timeout>
    </flow>`;

    xhr.send(data);
}
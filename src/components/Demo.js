import "../styles/Demo.css";

export default function Demo() {
  return (
    <div className="demo-container">
      <h1 className="demo-title">How to Use the DUT Testing Chatbot</h1>

      <section className="demo-section">
        <h2>Step-by-Step Instructions</h2>
        <ol>
          <li>Navigate to the chatbot.</li>
          <li>Type your test configuration like:
            <code>Configure DUT with User Side VSI with VLAN 100 on Line1</code>
          </li>
          <li>The chatbot will analyze and provide structured output.</li>
          <li>You can copy the output to the clipboard or save it as a json or docx file</li>
        </ol>
      </section>

      <section className="demo-section">
        <h2>Example Inputs</h2>
        <ul>
          <li><code>1. Configure DUT with User Side VSI with VLAN 100 on Line1</code></li>
          <li><code>2. Configure DUT with Network Side VSI with VLAN 200 on Uplink1</code></li>
          <li><code>3. Send Upstream Traffic with VLAN100 and PBIT 5</code></li>
          <li><code>4. Ensure User Traffic is received without loss.</code></li>
          <li><code>5. Send Downstream Traffic with VLAN200 and PBIT 7</code></li>
          <li><code>6. Ensure Network Traffic is received without loss.</code></li>
        </ul>
      </section>

      <section className="demo-section">
        <h2>Example Output</h2>
        <ul>
          <li><code>"Entity1 = DUT</code></li>
          <li><code>Entity1 Keywords =</code></li>
          <li><code>UserVSI-1 = VLAN=100, PBIT=5</code></li>
          <li><code>UserVSI-1 Parent = Line1</code></li>
          <li><code>NetworkVSI-1 = VLAN=200, PBIT=7</code></li>
          <li><code>NetworkVSI-1 Parent = Uplink1</code></li>
          <li><code>Forwarder = N:1</code></li>
          <li><code>Test Eqpt - Upstream</code></li>
          <li><code>Entity2 = User Side Traffic Eqpt</code></li>
          <li><code>Entity2 Keywords=</code></li>
          <li><code>NumPackets To Generate = 100</code></li>
          <li><code>Packet  L2 Header </code></li>
          <li><code>Src MAC = 99:02:03:04:05:06</code></li>
          <li><code>Dst MAC = 98:0A:0B:0C:0D:0E</code></li>
          <li><code>VLAN = 100, PBIT =5</code></li>
          <li><code>Entity3 = Network Side Traffic Eqpt</code></li>
          <li><code>Entity3 Keywords=</code></li>
          <li><code>NumPackets To Recieve = 100</code></li>
          <li><code>Packet L2 Header </code></li>
          <li><code>Src MAC = 99:02:03:04:05:06</code></li>
          <li><code>Dst MAC = 98:0A:0B:0C:0D:0E</code></li>
          <li><code>VLAN = 200, PBIT =5"</code></li>
          <li><code>Test Eqpt - Downstream</code></li>
          <li><code>Entity3 = Network Side Traffic Eqpt</code></li>
          <li><code>Entity3 Keywords=</code></li>
          <li><code>NumPackets To Generate = 100</code></li>
          <li><code>Packet L2 Header </code></li>
          <li><code>Src MAC = 98:0A:0B:0C:0D:0E</code></li>
          <li><code>Dst MAC = 99:02:03:04:05:06</code></li>
          <li><code>VLAN = 200, PBIT =7</code></li>
          <li><code>Entity2 = User Side Traffic Eqpt</code></li>
          <li><code>Entity2 Keywords=</code></li>
          <li><code>NumPackets To Recieve = 100</code></li>
          <li><code>Packet L2 Header </code></li>
          <li><code>Src MAC = 98:0A:0B:0C:0D:0E</code></li>
          <li><code>Dst MAC = 99:02:03:04:05:06</code></li>
          <li><code>VLAN = 100, PBIT =7</code></li>
        </ul>
      </section>

    </div>
  );
}

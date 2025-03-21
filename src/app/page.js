

const Home = () => {


  const f = JSON.stringify(  {"log": {"access": "", "error": "", "loglevel": "warning"}, "inbounds": [{"tag": "socks", "port": 10808, "listen": "127.0.0.1", "protocol": "socks", "sniffing": {"enabled": true, "destOverride": ["http", "tls"], "routeOnly": false}, "settings": {"auth": "noauth", "udp": true, "allowTransparent": false}}, {"tag": "http", "port": 10809, "listen": "127.0.0.1", "protocol": "http", "sniffing": {"enabled": true, "destOverride": ["http", "tls"], "routeOnly": false}, "settings": {"auth": "noauth", "udp": true, "allowTransparent": false}}], "outbounds": [{"tag": "proxy", "protocol": "vless", "settings": {"vnext": [{"address": "NjAV435FNMAZ87.gO404BG754.SBs", "port": 443, "users": [{"id": "f0531087-22e0-4457-b5aa-7b27591c8a4f", "alterId": 0, "email": "t@t.tt", "security": "auto", "encryption": "none", "flow": ""}]}]}, "streamSettings": {"network": "ws", "security": "tls", "tlsSettings": {"allowInsecure": false, "serverName": "bN4O35tHgKbLdSfFkJb.hElLoWoRlDpAgE02.ShOp", "alpn": ["h2", "http/1.1"], "fingerprint": "chrome", "show": false}, "wsSettings": {"path": "/jF0jKWg9hUxOjHbwyh", "headers": {"Host": "bN4O35tHgKbLdSfFkJb.hElLoWoRlDpAgE02.ShOp"}}, "sockopt": {"dialerProxy": "fragment", "tcpKeepAliveIdle": 100, "mark": 255, "tcpNoDelay": true}}, "mux": {"enabled": true, "concurrency": 8}}, {"tag": "fragment", "protocol": "freedom", "settings": {"domainStrategy": "AsIs", "fragment": {"packets": "tlshello", "length": "11-31", "interval": "3-9"}}, "streamSettings": {"sockopt": {"tcpNoDelay": true, "tcpKeepAliveIdle": 100}}}, {"tag": "direct", "protocol": "freedom", "settings": {}}, {"tag": "block", "protocol": "blackhole", "settings": {"response": {"type": "http"}}}], "routing": {"domainStrategy": "AsIs", "rules": [{"type": "field", "inboundTag": ["api"], "outboundTag": "api", "enabled": true}, {"id": "5627785659655799759", "type": "field", "port": "0-65535", "outboundTag": "proxy", "enabled": true}]}})
  console.log(f);
  return (
    <div>
      <p className="w-100% bg-red-300">
  
  {f}
      </p>

    </div>
  )
}

export default Home;
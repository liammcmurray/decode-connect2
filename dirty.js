var outboundLink = 'https://connect2.environment-agency.gov.uk/owa/,DanaInfo=webmail.prodds.ntnl,SSL+redir.aspx?C=6q6bDqZEH0uJ9HwEbq0zc-0-2LRsb9QI8W1HK85OarF68mviKlXa-17RuQ_PCMHodyKsi-Vl_9k.&URL=https%3a%2f%2fintranet.defra.gov.uk%2fforms%2fhomeworking-telephone-service-registration%2f';
var encodedLink = outboundLink.split('&URL=')[1];
var realLink = decodeURIComponent(encodedLink);

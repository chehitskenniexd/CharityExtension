const keywords = ['hospital', 'hospitals', 'casualties', 'flood', 'hurricane', 'tsunami', 'fire', 'catastrophe', 'disaster', 'victims', 'blood', 'transfusion', 'transfusions', 'disease', 'diseases', 'illness', 'illnesses', 'domain', 'information' ];

let count = 0;

const elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            keywords.forEach(word => {
              if (text.includes(word)) {
                count++;
              }
            })

        }
    }
}

if (count > 3) {
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response);
  });

}


console.log(count);
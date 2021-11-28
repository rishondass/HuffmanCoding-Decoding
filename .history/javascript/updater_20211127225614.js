var huffmanCoding = new HuffmanCoding(),
timing;



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput');


encoder.addEventListener('input',
    function inputListener(e){
        

        deCoder.disabled = true;
    timing = setTimeout(function() {
        huffmanCoding.clearTable();
        if (enCoder.value !== "") {
            Huffman.init(enCoder.value);
            updateTable(Huffman.table, Huffman.code);
            updateGraph(Huffman.table);
            deCoder.disabled = false;
        }
    }, 400);
        
        //print(huffmanCoding.codeDict);
        
    }

);

decoder.addEventListener('input',
    function inputListener(e){
        if(huffmanCoding.string == "" || huffmanCoding.string == null){
            document.getElementById("decoderInput").value = "";
            alert("You have to input characters in encoding first!");
        }
        huffmanCoding.clearDecoder();
        if(decoder.value != ''){
            decoder.value = e.target.value.replace(/[^01]/g, '');
            var list = huffmanCoding.deCode(decoder.value);
        }
        
        
        
        // console.clear();
        print(list);
    }
);
var i = 0;
var replaceText = false;
var textString;
var changeIdNumr;
var butArray;

document.getElementById('base').addEventListener('keypress', (e)=> {
    var key = e.charCode;
    if (replaceText == false){
        if (key == '13') {
            ++i;
            var inputNode = document.getElementById('base'); // Создаем элемент с данными из текстовой вкладки
            var innerText = inputNode.value;    // Копируем содержимого текстовой строки
            var isUpperCase = innerText[0].toUpperCase(); // Первую букву делаем заглавной 
                                                        // (не влияет на работоспособность если там символ или уже большая буква)
                                                        // наверное по хорошему нужно сделать проверку if (innerText[0] == /[^a-z][а-я]/ )
                                                        // а дальше если тру, то менять на большую, если фолс то бежим дальше ;)
            var arr = innerText.split(''); // Переделываем строку в массив (у строки нет метода splice)
            arr.splice(0, 1); // используем метод сплайс для удаления первого элемента (без "дыр")
            isUpperCase += arr.join('');    // массив переделываем в строку
            var div = document.createElement('div');    // создаем див
            div.align = 'center';
            var span = document.createElement('span');  // создаем спан
            var del = document.createElement('button');
            del.type = 'button';
            del.innerHTML = "Del";
            del.onclick = function(){
                var count = parseInt(del.id.replace(/\D+/g,""));
                document.body.removeChild(document.getElementById(count + '_div'));
                // здесь нужно переписать все порядковые номера списка!!!!!
                var content;
                var contentId;
                for (a = count; a < i; a++) {
                    document.getElementById((a+1) + '_div').id = a + "_div";
                    document.getElementById((a+1) + '_del').id = a + "_del";
                    document.getElementById((a+1) + '_change').id = a + "_change";
                    document.getElementById((a+1) + '_span').id = a + "_span";
                    content = document.getElementById(a + '_span').outerText;
                    contentId = parseInt(content.replace(/\D+/g,""));

                    content = content.replace(contentId,"");
                    document.getElementById(a + '_span').innerHTML = a + content;
                    
                }
                i = i - 1;
            };
            var change = document.createElement('button');
            change.type = 'button';
            change.onclick = function() {
                changeIdNumr = parseInt(change.id.replace(/\D+/g,""));
                textString = document.getElementById(changeIdNumr + '_span').outerText;
                textString = textString.replace(changeIdNumr,"");
                document.getElementById('base').value = textString;
                butArray = document.querySelectorAll('button');
                butArray.forEach(element => {
                    element.disabled = true;
                });
                replaceText = true;
                document.getElementById('base').focus();
                
            };

            div.id = i + "_div";
            del.id = i + "_del";
            change.id = i + "_change";
            span.id = i + "_span";
            
            span.innerHTML = i + " " + isUpperCase; // записываем порядковый номер заметки
            document.body.appendChild(div).appendChild(change).appendChild(span);   // Добавляем элементы див и спан в хтмл
            div.appendChild(del);
            
            document.getElementById('base').value = null;   // обнуляем строку ввода

        }
    }
    else{
        if (key == '13') {
            var changeNode = document.getElementById('base');
            var changeText = changeNode.value;
            var isUpperCase = changeText[0].toUpperCase();
            var arr = changeText.split('');
            arr.splice(0, 1);
            isUpperCase += arr.join('');
            document.getElementById(changeIdNumr + '_span').innerHTML = changeIdNumr + " " + isUpperCase;
            document.getElementById('base').value = null;
            // document.querySelectorAll('button').disabled = false;
            butArray = document.querySelectorAll('button');
            butArray.forEach(element => {
                element.disabled = false;
            });
            replaceText = false;
        }
    }
});

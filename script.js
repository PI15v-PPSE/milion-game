/**
*@var question  хранит наши вопросы
*/
var question = ['Что из этого не является косметическим средством?', 'Кто, в конце концов, скушал Колобка?','Какой шахматной фигуры не существует?','Что означает буква «О» в аббревиатуре ОРТ?','Главный герой в романе Ф. И. Достоевского «Преступление и наказание»','В состав любого органического вещества входит…','Какое слово здесь лишнее?','Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?','Кто изобрел громоотвод?','Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?','В каком городе находится штаб-квартира Microsoft?','При каком правителе к России была присоединена территория Финляндии?','Ричард Львиное Сердце был пленен во время','Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?','Кто такой «молотоглав»?'];
/**
*@var answer переменная ответы на вопросы
*/
var answer = ['Помада','Татуировка','Крем','Пудра',  'Дед','Баба','Заяц','Лиса', 'Пешка','Конь','Король','Дама', 'Олигархическое','Объективное','Общественное','Однообразное', 'Расторгуев','Чикатило','Тумбочкин','Раскольников', 'кислород','углерод','водород','азот', 'Автор','Товар ','Отвар','Ворот', 'Синодский регистратор','Провинциальный секретарь','Коллежский регистратор','Кабинетский регистратор', 'Франклин','Рузвельт','Вашингтон','Линкольн', 'Дворовые','Захребетники','Нахлебники','Бестягольные', 'Нью-Йорк','Ричмонд','Новый Орлеан','Сиэтл', 'Петр I','Екатерина II','Павел I','Александр I', 'крестового похода','столетней войны','войны алой и белой розы','войны за независимость', '10','20','70','90', 'Рыба','Птица','Змея','Насекомое'];
/**
*@var key переменная  номер правильного ответа
*/
var key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];
/**
*@var level переменная уровень игрока 
*/
var level = 0;
/**
*@var name переменная  имя игрока 
*/
var name = 'name';	
/**
*@var username переменная  имя игрока
*/
var username = readCookie(name);


if (username != null) {	
    $('.start').css('display', 'none');
    $('.reStart').css('display', 'block');
    $('.hellow').text('С возвращением, ' + username + '!');

$('#startGame').click(function(){
	
    $('.reStart').css('display', 'none');
    setTimeout(timer,1000);
    });
}

/**
* Функция которая определяет уровень игрока(вопрос на какую сумму задан)
*/
function show(level) {

    $('.question').text( question[level] );
    $('label[for=answer1]').text( answer[level*4+0] );
    $('label[for=answer2]').text( answer[level*4+1] );
    $('label[for=answer3]').text( answer[level*4+2] );
    $('label[for=answer4]').text( answer[level*4+3] );
}

/**
*@var resultConst переменная хранит уровень
*/
var resultConst = [];		
show(level);

/**
*@var tr переменная меняет цвет фона
*/
var tr = $('tr'); 
$(tr[tr.length - (level + 1)]).css('background','#FF0');

$('.btn').click(function(){

    $("#timer_inp").text(60);

    if( $('input[name=answer]:checked').val() == key[level] ){
        level++;
        show(level);
        }
        else{gameOwer()}
	
        $('input').prop('checked', false);
        $(tr.css('background','#fff'));
        $(tr.removeClass('result'));
        $(tr[tr.length - (level + 1)]).css('background','#FF0');
        $(tr[tr.length - (level)]).css('color','#f0f');
        $(tr[tr.length - (level)]).addClass('result');
        $('label').css('color', '#555');

	if (level == 5 || level == 10 || level == 15){
	    resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
	}
})

/**
*вызываем математические функции
*/
Math.rand = function(min, max){
    return Math.round(Math.random() * (max-min) + min);
}

/**
*@var inputLabel вставляет надпись
*/
var inputLabel = document.getElementsByTagName('label');
$('.round50').click(function(){
/**
*@var inputAnswer вставляет ответ
*/
/**
*@var exp экспонента
*/
/**
*@var count считающая количество
*/    
var inputAnswer = document.getElementsByName('answer');
var exp = [];	
var count = 0;
while(count < 2) {
    var index = Math.rand(0,3);
     if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level] ){
	$(inputLabel[index]).css('color', '#69f');
	count++;
	exp.push(index);
	}
	}
      $(this).off('click');
      $(this).css('background', 'red');
})
/**
*функция обработки клика
*/	 
$('.round').click(function(){
		
    $(inputLabel[Math.rand(0,3)]).css('color', '#F90'),
    $(this).off('click');
    $(this).css('background', 'red');
		
})
/**
*@var result вывод результата
*/
var result = $('.result'); 
$('.roundEnd').click(function(){

     end();
})

/**
* Функция которая выполняет действие при не правильном ответе игрока 
* Функция ни принимает не какой переменной и ничего не возвращает
*/
function end() {

        $('.end').css('display', 'block');

        if (tr.hasClass('result')) {
	       var tdResult = $("tr.result").children();
	       var tdText = tdResult[1].textContent;	
	       $('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText + ' гривень');
        }
}

/**
* Функция которая выполняет действие при ответе игроком на все вопросы
* Не принимает переменных и выводит текст в форму выиграша
*/
/**
*@var tdResult1 вывод результата
*/
/**
*@var tdText1 вывод текст
*/
function gameOwer() {

        $('.end').css('display', 'block');

        if (tr.hasClass('resultConst')){
	        var tdResult1 = $(resultConst[resultConst.length - 1]).children();
	        var tdText1 = tdResult1[1].textContent;
	        $('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText1 + ' гривень');
        }
}

/**
* Функция которая устанавливает лимит по времени
* и следит за его исполнением.
*/
function timer(){

        var objTimer=document.getElementById('timer_inp');
        objTimer.innerHTML--;
  	
        if(objTimer.innerHTML==5)
	        {
	         $('#timer_inp').css('background', 'red');
	        }
        if(objTimer.innerHTML==0){
	        setTimeout(function(){},1000);
	        gameOwer();
	     }
        else{
            setTimeout(timer,1000)}

}

$('form').submit(function(e){ 

        e.preventDefault()
	
});

$('#start').click(function(){

        if ($('#user').val() != '') {
	        $('.start').css('display', 'none');
	        setTimeout(timer,1000);
        }
        else{
	        $('#user').css('background', '#f30')
        }	

        var value = $('#user').val();

        createCookie(name, value, 1);
});

/**
* Функция создает кук с базовыми параметрами 
* Принимает переменные имени даты и значения
*/
/**
*@var date дата
*/
/**
*@var expires вывод в документ
*/
function createCookie(name, value, days) {
    if (days)  {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

/**
* Функция читает кук данные 
* Принимает переменные имени
* Возвращает 0 или значение функции
*/
function readCookie(name) {
/**
*@var nameEQ имя игрока
*/
/**
*@var ca вывод в документ
*/
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            var value = c.substring(nameEQ.length,c.length);
            return value.split(",");
        }
    }
    return null;
}

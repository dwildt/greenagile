/**
 * @author lucianocosta
 */

var URL_NEW_TASK = "features/new";

var URL_EDIT_TASK = "features/#id/edit";

var URL_ITEMS = "features/search_status";



var items_NotStarted = new Array();
var items_InProgress = new Array();
var items_Done = new Array();

/**
 * Exibe formulário de edição da Tarefa.
 */
function showTask(taskId){
	var url = URL_EDIT_TASK.replace(/#id/, taskId);
	$("#dialog").load( url );
	$("#dialog").dialog('open');
}

/**
 * Exibe formulário de criação de Tarefa.
 */
function newTask(){
	$("#dialog").load( URL_NEW_TASK );
	$("#dialog").dialog('open');
}

/**
 * Carrega/atualiza Burndown Chart.
 */
function loadChart(){
	var chart = new FusionCharts("charts/FCF_Line.swf", "ChartId", "300", "250",0,0);
	chart.setDataURL("xml/Line2D.xml");
	//chart.setTransparent(true);
	chart.render("divchart");	
}

/**
 * Salva status e ordem das tarefas.
 */
function saveAll(){
	items_NotStarted = $('#NotStarted').sortable('toArray');
	items_InProgress = $('#InProgress').sortable('toArray');
	items_Done = $('#Done').sortable('toArray');
	
	debug();// remover depois	
}


function debug(){
	$("#debugWindow").html("<br/><b>NotStarted:</b> " + items_NotStarted + '<br><b>InProgress:</b> ' + items_InProgress + '<br><b>Done:</b> ' + items_Done);
}

/**
 * Template html de uma Tarefa.
 * Permite renderização de JSON on-the-fly =)
 */
var t = "";
t += "<li id='${id}' ondblclick='showTask(\"${id}\")'>";
t += "	<div class='Task ${category}'>";
t += "		<div class='TaskTitle'>${title}</div>";
t += "		<div class='TaskDetail'>#${size} | ${category}</div>";
t += "	</div>";
t += "</li>";
var taskTemplate = $.template(t);


function saveTask(){
	// obs: pegar valores do formulario
	var task = {};
	task.id = 'Stan';
	task.title = 'feeling';
	task.points = '9';
	task.person = 'Aline Dev';
	createNewTask(task);
	$("#dialog").dialog('close');
}


/**
 * Permite criar novas tarefas em tempo de execuçao.
 * @param {Object} obj representacao JSON de uma tarefa.
 */
function createNewTask(obj){
	$("#NotStarted").append( taskTemplate , obj );
}


/**
 * Codigo de inicializacao da tela.
 */
function initTaskboard(){
	
	/**
	 * Cria janela para edição da tarefa.
	 */
	$("#dialog").dialog({ 
		title:"Detalhes da Tarefa",
		modal: true,
		//draggable:false,
		autoOpen: false,
		height:350,
		width:550,
		//position:['left','middle']
		position:[100,80]
	});
	
	
	/**
	 * Conectores das colunas do kanban.
	 */
	$("#NotStarted").sortable({ 
	    connectWith: ["#InProgress"]
	}); 
	
	$("#InProgress").sortable({ 
	    connectWith: ["#NotStarted","#Done"] 
	});
	
	$("#Done").sortable({ 
	    connectWith: ["#InProgress"] 
	});
	
	
	/**
	 * Bind de Eventos: Executa função "saveAll()" ao reordenar as tarefas.
	 */
	$('#NotStarted').bind('sortstop', function(event, ui) { saveAll(); });
	$('#NotStarted').bind('sortreceive', function(event, ui) { changeStatus( $(ui.item).attr('id'), $(this).attr('id') ); });
	$('#InProgress').bind('sortreceive', function(event, ui) { changeStatus( $(ui.item).attr('id'), $(this).attr('id') ); });
	$('#Done').bind('sortreceive', function(event, ui) { changeStatus( $(ui.item).attr('id'), $(this).attr('id') ); });
	$('#InProgress').bind('sortstop', function(event, ui) { saveAll(); });
	$('#Done').bind('sortstop', function(event, ui) { saveAll(); });
	$('#Done').bind('sortreceive', function(event, ui) { loadChart(); });
	$('#Done').bind('sortremove', function(event, ui) { loadChart(); });

	loadColumn("#NotStarted", URL_ITEMS + "/NotStarted");

	loadColumn("#InProgress", URL_ITEMS +"/InProgress");
	
	loadColumn("#Done", URL_ITEMS +"/Done");



	//loadChart();

	//saveAll(); // remover depois

}


/**
 * Carrega Coluna do Taskboard através de requisição Ajax.
 * 
 * @param {String} id da coluna.
 * @param {String} url.
 */
function loadColumn(columnId, url){
	jQuery.getJSON( url ,	function(data,status){ 
		$.each(data, function(i,item){
			$( columnId ).append( taskTemplate , item.feature);
		});
	}); 
}


function changeStatus(featureId, status){
	$.ajax({
	  url: "features/change_status/"+featureId+"/"+status,
	  cache: false,
	  success: function(html){
		loadColumn("#"+status, URL_ITEMS +"/"+status);
	  }
	});
}
/**
 * @author lucianocosta
 */


/**
 * Conectores dos recipientes de User Stories.
 */
function refreshConectors(){	
	$("#Items_Backlog").sortable({ 
	    connectWith: [".SprintBacklog"]
	}); 
	$(".SprintBacklog").sortable({ 
	    connectWith: ["#Items_Backlog",".SprintBacklog"]
	});
}

/**
 * Template html de um Sprint.
 */
var sprint = "";
sprint += "<div id='div_${id}' style='font-weight:bold;'>";
sprint += "	<img class='Toggler' style='cursor:pointer; vertical-align:bottom;' title='Collapse' src='images/collapse.png' onclick='toggleSprint(\"${id}\")'/>";
sprint += "	<img class='ImageButton' title='Edit' src='images/edit.png' onclick='showSprintForm(\"${id}\")'/>";
sprint += "	${description}";
sprint += "	<ul id='${id}' class='SprintBacklog'> </ul> ";
sprint += "</div>";
var sprintTemplate = $.template(sprint);


/**
 * Template html de um item de backlog.
 */
var li = "<li id='${id}' class='BacklogItem' ondblclick='showUserStoryForm(${id})'>${description}</li>";
var storyTemplate = $.template(li);


/**
 * Exibe formulário de edição da User Story.
 */
function showUserStoryForm(storyId){
	$("#dialog_userStory").load("userStory.html?storyId="+storyId);
	$("#dialog_userStory").dialog('open');
}


/**
 * Exibe formulário de edição do Sprint.
 */
function showSprintForm(sprintId){
	$("#dialog_sprint").load("sprint.html?sprintId="+sprintId);
	$("#dialog_sprint").dialog('open');
}


var idUS = 0; // remover depois
function saveUserStory(){
	// obs: pegar valores do formulario	
	idUS++;	
	task = {};
	task.id = idUS;
	task.description = 'on the fly ' + idUS;
	addUserStory(task);
	$("#dialog_userStory").dialog('close');
}


/**
 * Permite criar novas tarefas em tempo de execuçao.
 * @param {Object} obj representacao JSON de uma tarefa.
 */
function addUserStory(obj){
	$("#Items_Backlog").append( storyTemplate , obj );
}


function saveSprint(){
	var item = {};
	item.id = (Math.random(450)+"").replace(".","");
	item.description = "On the fly Sprint";
	$("#Container_Sprints").append( sprintTemplate , item);
	refreshConectors();
	$("#dialog_sprint").dialog('close');
}


/**
 * Exibe/Esconde UserStories do Sprint.
 * 
 * @param {Object} sprintId
 */
function toggleSprint(sprintId){
	var a = $('#' + sprintId).toggle();
	//debugger;
	var imgSrc = "";
	var title = "";
	if($('#' + sprintId ).css("display") != 'none'){
		imgSrc = 'images/collapse.png';
		title = "Collapse";
	}else{
		imgSrc = 'images/expand.png';
		title = "Expand";
	} 
	$('#div_' + sprintId + ' .Toggler').attr('src',imgSrc);
	$('#div_' + sprintId + ' .Toggler').attr('title',title);
}


/**
 * codigo de inicializacao da tela.
 */
function initPlanning(){
	
	/**
	 * Cria janela para edição do Sprint.
	 */
	$("#dialog_sprint").dialog({ 
		title:"Detalhes do Sprint",
		modal: true,
		//draggable:false,
		autoOpen: false,
		height:300,
		width:550,
		position:[100,80]
	});
	
	/**
	 * Cria janela para edição de User Story.
	 */
	$("#dialog_userStory").dialog({ 
		title:"User Story",
		modal: true,
		//draggable:false,
		autoOpen: false,
		height:400,
		width:550,
		position:[100,80]
	});
	
	refreshConectors();
}
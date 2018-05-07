$(document).ready(function(){
        
          const edit = $(".middleEditButton");
          edit.css("visibility","hidden");
          let disable = false;
          let counter = 0;
          const item = $("#itemEntry");
          const quantity = $("#quantity");
          const unitsOfMeasurement = $("#unitsOfMeasurement");
          const addButton = $("#addButton");
          const masterCloseButton = $("#masterCloseButton");
          let checkAll = false;
  
          function AddItemToList(){
          $(".bottom").append($("<div class='itemContainer'><hr><div class='list' id='list'><div class='content'><input type='checkbox' id='checkbox' class='classCheckbox'><label for='checkbox' class='para'></label></div><div class='close'><span class='hide'>&#10006</span></div></div></div>"));
          $("#list").attr("id", "list"+counter);
          $("#checkbox").attr("id", "checkbox"+counter);
          $(item).attr("id", "item"+counter);
          $("label[for='checkbox']").attr("for", "checkbox"+counter);
          $("label:last").text($(item).val() +" "+ quantity.val()+" "+unitsOfMeasurement.val());
          item.val("");
          quantity.val("");
          unitsOfMeasurement.val("");
          edit.css("visibility","visible");
          ++counter;
            
            
                    $(":checkbox").click(function(){
                            if($(this).is(":checked")){
                              $(this).siblings("label").css("text-decoration","line-through");
                            }
                            else{
                              $(this).siblings("label").css("text-decoration","none");
                            }
                    });
          }
                         
quantity.keypress(function(event){
if(event.which===13 &&item.val()!=0){
AddItemToList(); 
}
});
  
  
  unitsOfMeasurement.keypress(function(event){
  if(event.which===13 &&item.val()!=0){
  AddItemToList(); 
  }
  });
  
  
                                    item.keypress(function(event){
                                      if(event.which===13 &&item.val()!=0){
                                       AddItemToList(); 
                                      }
                                    });

                                                addButton.click(function(event){
                                                if(item.val()!=0){
                                                 AddItemToList();
                                                }
                                              });
                         
                         edit.click(function(){
                           $(".masterCheckbox").toggleClass("show");
                           masterCloseButton.toggleClass("show");
                           let itemsInList = $("html").find(".list");
                           
                                       if(itemsInList.length!=0){

                                                         $("span").toggleClass("show");
                                                         if(disable===false){
                                                           disable=true;
                                                         }
                                                         else {
                                                           disable=false;
                                                         }
                                                         if(disable && itemsInList.length!=0){
                                                           item.prop("disabled", true);
                                                           quantity.prop("disabled", true);
                                                           unitsOfMeasurement.prop("disabled", true);
                                                           addButton.prop("disabled", true);
                                                         }
                                                         else {
                                                           item.prop("disabled", false);
                                                           quantity.prop("disabled", false);
                                                           unitsOfMeasurement.prop("disabled", false);
                                                           addButton.prop("disabled", false);
                                                         } 

                                                                        $("span").click(function(){
                                                                        $(this).closest(".itemContainer").remove();
                                                                       var itemsInList = $("html").find(".itemContainer");
                                                                       if(itemsInList.length===0){
                                                                        window.location.reload(true); 
                                                                       }
                                                                       });
                                         }
                           });

$("#masterCheckbox").click(function(){
            if(checkAll===false){
              $(":checkbox.classCheckbox, .masterCheckbox").prop("checked",true);
              $("html").find("label").css("text-decoration","line-through");
              checkAll = true;
            }
            else {
              $(":checkbox.classCheckbox,  .masterCheckbox").prop("checked",false);
              $("html").find("label").css("text-decoration","none");
              checkAll = false;
            }
});
  
  masterCloseButton.click(function(){
    if(window.confirm("Delete all Items on the List?")){
      $("html").find(".itemContainer").remove();
      window.location.reload(true); 
    }
    
  });
           
});
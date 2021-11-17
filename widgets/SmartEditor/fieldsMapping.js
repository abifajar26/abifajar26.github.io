// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/fieldsMapping.html":'\x3cdiv style\x3d"width: 100%; height: 100%;" \x3e\r\n    \x3cdiv class\x3d"esriCTBottomSpacing"\x3e\r\n        ${nls.fieldsMapping.informativeText}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTBottomSpacing"\x3e\r\n        \x3cdiv  data-dojo-attach-point\x3d"fieldsMatchingCheckboxNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d\'esriCTFieldsMappingContainer\' data-dojo-attach-point\x3d"fieldsMappingContainer"\x3e\r\n    \r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/text!./fieldsMapping.html ./fieldMap dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/Popup dojo/dom-construct dojo/_base/array dojo/on jimu/dijit/CheckBox".split(" "),function(c,d,b,e,f,g,h,k,l,m,n,p){return c([h,d,g],{baseClass:"jimu-widget-smartEditor-fieldsMapping",templateString:e,fieldsPopup:null,nodes:[],fieldMapBySourceLayer:{},postCreate:function(){this.nodes=[];this.own(n(window,"resize",b.hitch(this,function(){this._setFieldPopupDimensions()})));
this.fieldMapBySourceLayer={};this.valuesOverrideCheckbox=new p({label:this.nls.fieldsMapping.fieldsMatchingCheckboxLabel,class:"esriCTFieldCheckbox","aria-label":this.nls.fieldsMapping.fieldsMatchingCheckboxLabel},this.fieldsMatchingCheckboxNode);this.overrideDefaultsByCopiedFeature&&this.valuesOverrideCheckbox.setValue(this.overrideDefaultsByCopiedFeature);this._addFieldMapping();this._createPopUp()},_createPopUp:function(){this.fieldsPopup=new k({titleLabel:this.nls.fieldsMapping.popupTittle,width:600,
autoHeight:!0,"class":this.baseClass,content:this,buttons:[{label:this.nls.ok,id:"okButton",onClick:b.hitch(this,function(){for(var a in this.fieldMapBySourceLayer){var q=this.fieldMapBySourceLayer[a].getMatchedFields();this.fieldMappingDetails.hasOwnProperty(this.targetLayerDetails.id)||(this.fieldMappingDetails[this.targetLayerDetails.id]={});this.fieldMappingDetails[this.targetLayerDetails.id][a]=q}this.emit("field-mapping-changed",{fieldMappingDetails:this.fieldMappingDetails,overrideDefaultsByCopiedFeature:this.valuesOverrideCheckbox.getValue()});
this.fieldsPopup.close()})},{label:this.nls.cancel,id:"cancelButton",onClick:b.hitch(this,function(){this.emit("cancelButtonClicked");this.fieldsPopup.close()})}]});this._setFieldPopupDimensions()},_addFieldMapping:function(){m.forEach(this.sourceLayerDetails,b.hitch(this,function(a){this.fieldMapBySourceLayer[a.id]=new f({nls:this.nls,sourceLayerDetails:a,targetLayerDetails:this.targetLayerDetails,openOnLoad:1===this.sourceLayerDetails.length?!0:!1,fieldMappingDetails:this.fieldMappingDetails,usePresetValues:this.usePresetValues},
l.create("div",{"class":"esriCTBottomSpacing"},this.fieldsMappingContainer))}))},_setFieldPopupDimensions:function(){this.fieldsPopup&&(window.appInfo.isRunInMobile?this.fieldsPopup.set("width",window.innerWidth-100):this.fieldsPopup.set("width",600))}})});
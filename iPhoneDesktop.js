Ext.ns('simfla.ux.plugins');

simfla.ux.plugins.divide = function ( numerator, denominator ) {

    var remainder = numerator % denominator;

    var quotient = ( numerator - remainder ) / denominator;

    return  quotient

}


simfla.ux.plugins.iPhoneDesktop = Ext.extend(Ext.util.Observable, {
    
    init: function(cmp){
        this.cmp = cmp;
        cmp.on('render', this.initDesktop, this);
    },
    
    initDesktop: function() {
        var me = this, lastButton, firstButton;
        
         me.cmp.mon(me.cmp.el, {
		       scope: me,
		       taphold  : me.editDesktop,
                       doubletap  : me.endEditDesktop
		   });
        
        //Assume 4 x 4 layout
        if (me.buttons){
            var numberOfPanels = simfla.ux.plugins.divide(me.buttons.length,16) + 1;
            for (var i = 1; i <= numberOfPanels; i++) {
                //Create Main Panel
                me.cmp.add({
                    xtype: 'panel',
                    padding: 10,
                    id: 'panel' + i.toString(),
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'panel',
                        id: 'panel' + i.toString() + 'R1',
                        flex: 1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        }
                    },{
                        xtype: 'panel',
                        id: 'panel' + i.toString() + 'R2',
                        flex: 1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        }
                    },{
                        xtype: 'panel',
                        id: 'panel' + i.toString() + 'R3',
                        flex: 1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        }
                    },{
                        xtype: 'panel',
                        id: 'panel' + i.toString() + 'R4',
                        flex: 1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        }
                    }]
                });
                //Add Buttons to Panel
                lastButton = (i * 16) - 1;
                firstButton = lastButton - 15;
                for (var b = firstButton, row = 1, rb = 0; b <= lastButton; b++) {
                    var rowPanel = Ext.getCmp('panel' + i.toString() + 'R' + row.toString());
                    var currentbutton = me.buttons[b];
                    
                    if (rowPanel) {
                        if(currentbutton) {
                            rowPanel.add({flex:1, items: [currentbutton]});	
                        }else{
                           rowPanel.add({flex:1});
                        }
                    }
                    
                    rb++;
                    if (rb > 3) {
                        rb = 0;
                        row ++;
                    }
                }
            }
        }
    },
    
    editDesktop: function() {
        var me = this;
        if (me.buttons) {
           for(var i = 0; i < me.buttons.length; i++){
                me.buttons[i].plugins[0].cmp.startEdit(me.buttons[i].plugins[0].cmp);
           }
        }
    },
    
    endEditDesktop: function() {
        var me = this;
        if (me.buttons) {
           for(var i = 0; i < me.buttons.length; i++){
                me.buttons[i].plugins[0].cmp.endEdit(me.buttons[i].plugins[0].cmp);
           }
        }
    }
    
});

Ext.preg('iphonedesktop', simfla.ux.plugins.iPhoneDesktop);
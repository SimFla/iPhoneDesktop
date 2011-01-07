Ext.ns('simfla.ux.plugins');

simfla.ux.plugins.iPhoneDesktopButton = Ext.extend(Ext.util.Observable, {
    
    iPhoneDesktopButtonCss: 'iPhoneDesktopButton',
    iPhoneDesktopButtonRemoveCss: 'iPhoneDesktopButtonRemove',
    
    init: function(cmp){
        this.cmp = cmp;
        cmp.on('render', this.initButton, this);
        cmp.startEdit = this.startEdit;
        cmp.endEdit = this.endEdit;
    },
    
    initButton: function() {
        var me = this;
        
        me.cmp.el.addCls(me.iPhoneDesktopButtonCss);
        
         if (!me.imgEl && me.image) {
	    me.imgEl = me.cmp.el.createChild({
                    tag: 'img',
                    src: me.image
            });
	}
        if (!me.imgShineEl) {
	    me.imgShineEl = me.cmp.el.createChild({
                    tag: 'img',
                    src: 'bg.png'
            });
	}
        
    },
    
    startEdit: function(cmp) {
        if( cmp.el.dom.className.indexOf('shake') < 0)
        {
            cmp.el.addCls('shake');
        }
        if (!cmp.imgRemoveEl) {
	    cmp.imgRemoveEl = cmp.el.createChild({
                    tag: 'span',
                    cls: 'iPhoneDesktopButtonRemove'
            });
	}
    },
    
    endEdit: function(cmp) {
        if( cmp.el.dom.className.indexOf('shake') >= 0)
        {
            cmp.el.removeCls('shake');
        }
        if (cmp.imgRemoveEl) {
                cmp.imgRemoveEl.remove();
                cmp.imgRemoveEl = undefined;
	}
    }
});

Ext.preg('iphonedesktopbutton', simfla.ux.plugins.iPhoneDesktopButton);
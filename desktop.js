Ext.ns('demo');

demo.buttons = [{
			    xtype: 'button',
			    text: 'My Button',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 2',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon2.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 3',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon6.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon4.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 2',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon2.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 3',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon6.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon4.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 2',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon2.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 3',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon3.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon5.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 2',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon2.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 3',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon5.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 2',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon2.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 3',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon5.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 2',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon6.png'})]
			},{
			    xtype: 'button',
			    text: 'My Button 3',
			    plugins: [new simfla.ux.plugins.iPhoneDesktopButton({image: 'icon3.png'})]
			}],

Ext.setup({
    onReady: function() {	
	var main = new Ext.Carousel({

		fullscreen: true,

		name: 'thePanel',
		
		cls: 'iPhoneDesktopBg',
		
		dockedItems: [{
		    xtype: 'toolbar',
		    dock: 'bottom'
		}],

		plugins: [new simfla.ux.plugins.iPhoneDesktop({buttons: demo.buttons})]
	});
	
    }
    
});
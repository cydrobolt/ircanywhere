App.EventController = Ember.ObjectController.extend({
	needs: ['tab'],
	
	classNames: function() {
		var type = this.get('content').type;
		return (type === 'privmsg') ? 'row' : 'row other';
	}.property('content.type'),

	isJoin: function() {
		return (this.get('content').type === 'join');
	}.property('content.type'),

	isPart: function() {
		return (this.get('content').type === 'part');
	}.property('content.type'),

	isQuit: function() {
		return (this.get('content').type === 'quit');
	}.property('content.type'),

	isMode: function() {
		return (this.get('content').type === 'mode');
	}.property('content.type'),

	isTopic: function() {
		return (this.get('content').type === 'topic');
	}.property('content.type'),

	isNick: function() {
		return (this.get('content').type === 'nick');
	}.property('content.type'),

	isKick: function() {
		return (this.get('content').type === 'kick');
	}.property('content.type'),

	isPrivmsg: function() {
		return (this.get('content').type === 'privmsg');
	}.property('content.type')
});
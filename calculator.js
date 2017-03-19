var stackNumber = 64;
var stacksInSingleChest = 27;
var stacksInDoubleChest = stacksInSingleChest * 2;

var app = new Vue({
	el: '#app',
	data: {
		items: stackNumber
	},
	computed: {
		stacks: {
			get: function() {
				return Math.floor(this.items / stackNumber);
			},
			set: function(value) {
				this.items = value * stackNumber + this.remaining;
			}
		},
		remaining: {
			get: function() {
				return this.items % stackNumber;
			},
			set: function(value) {
				this.items = this.stacks * stackNumber + Number(value);
			}
		},
		singleChests: {
			get: function() {
				return this.items / (stacksInSingleChest * stackNumber);
			},
			set: function(value) {
				this.items = value * stacksInSingleChest * stackNumber;
			}
		},
		doubleChests: {
			get: function() {
				return this.items / (stacksInDoubleChest * stackNumber);
			},
			set: function(value) {
				this.items = value * stacksInDoubleChest * stackNumber;
			}
		}
	}
});

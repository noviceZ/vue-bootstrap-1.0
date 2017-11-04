
//主人部分 master
var master = new Vue({

	el:"#master",
	
	data: {
		
		//展示发表后的寄语
		masterMessage:"",
		//编辑寄语的内容
		message:"",
		//展示主人寄语判断
		showMaster:false
	},
	
	methods:{
		
		editMessage:function() {
			
			this.showMaster = true
		},
		
		cancelEdit:function() {
			
			this.showMaster = false
		},
		
		publish:function() {
			
			this.masterMessage = this.message,
			this.showMaster = false
		}
	}
});
//master end

//已发表留言部分 user-content
var userCon = new Vue({
	
	el:"#user",
	
	data:{
		//统计的留言数
		count:"",
		//所有留言集合
		userContent:[]
	}
});
//user-content end

//写留言部分 write
var write = new Vue({
	
	el:"#write",
	
	data:{
		
		//判断写留言是否展示
		userMessage: false,
		//接收写下的留言内容
		message2:""
	},
	
	methods: {
		
		writeMessage:function() {
			
			this.userMessage = true
		},
		
		userPublish:function() {
			
 			userCon.userContent.push(write.message2),
			this.userMessage = false
		},
		
		userCancel:function() {
			
			this.userMessage = false
		}
	}
});
//write end
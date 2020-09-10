const Mock = require("mockjs");
const Random = Mock.Random;

const domain = "http://helperfaction.com/bgmanagement/api";

// test data
Mock.mock(`${domain}/news`, "get", (req) => {
	if (req.type == "GET") {
		let newsList = [];
		for (let i = 0; i < 20; i++) {
			let newNewsObject = {
				title: Random.ctitle(),
				content: Random.cparagraph(),
				createdTime: Random.date(),
			};
			newsList.push(newNewsObject);
		}
		return newsList;
	} else {
		return null;
	}
});

// index stackedarea data
Mock.mock(`${domain}/stackedareadata`, "get", (req) => {
	if (req.type == "GET") {
		let tableData = [{
				country: "平均交易金额",
				month: "1月",
				value: 202
			},
			{
				country: "平均交易金额",
				month: "2月",
				value: 502
			},
			{
				country: "平均交易金额",
				month: "3月",
				value: 635
			},
			{
				country: "当月总交易金额",
				month: "1月",
				value: 303
			},
			{
				country: "当月总交易金额",
				month: "2月",
				value: 163
			},
			{
				country: "当月总交易金额",
				month: "3月",
				value: 233
			},
		];
		return tableData;
	} else {
		return null;
	}
});

// index cloumns data
Mock.mock(`${domain}/columnuserdata`, "get", (req) => {
	if (req.type == "GET") {
		let columnData = [{
				type: '星期一',
				num: 38,
			},
			{
				type: '星期二',
				num: 52,
			},
			{
				type: '星期三',
				num: 61,
			},
			{
				type: '星期四',
				num: 145,
			},
			{
				type: '星期五',
				num: 48,
			},
			{
				type: '星期六',
				num: 33,
			},
			{
				type: '星期日',
				num: 70,
			}
		];
		return columnData;
	} else {
		return null;
	}
});

// index cloumns data
Mock.mock(`${domain}/columnmasterdata`, "get", (req) => {
	if (req.type == "GET") {
		let columnData = [{
				type: '星期一',
				num: 22,
			},
			{
				type: '星期二',
				num: 80,
			},
			{
				type: '星期三',
				num: 50,
			},
			{
				type: '星期四',
				num: 30,
			},
			{
				type: '星期五',
				num: 124,
			},
			{
				type: '星期六',
				num: 203,
			},
			{
				type: '星期日',
				num: 238,
			}
		];
		return columnData;
	} else {
		return null;
	}
});

// index cloumns data
Mock.mock(`${domain}/columnorderdata`, "get", (req) => {
	if (req.type == "GET") {
		let columnData = [{
				type: '星期一',
				num: 33,
			},
			{
				type: '星期二',
				num: 20,
			},
			{
				type: '星期三',
				num: 80,
			},
			{
				type: '星期四',
				num: 105,
			},
			{
				type: '星期五',
				num: 90,
			},
			{
				type: '星期六',
				num: 203,
			},
			{
				type: '星期日',
				num: 232,
			}
		];
		return columnData;
	} else {
		return null;
	}
});

// orderlist data
Mock.mock(`${domain}/orderlistdata`, "get", (req) => {
	if (req.type == "GET") {
		let data = [{
				key: "1",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "1",
			},
			{
				key: "2",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "2",
			},
			{
				key: "3",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "3",
			},
			{
				key: "4",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "4",
			},
			{
				key: "5",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "2",
			},
		];
		return data
	}
});

// orderlist columns
Mock.mock(`${domain}/orderlistcolumns`, "get", (req) => {
	if (req.type == "GET") {
		let columns = [{
				dataIndex: "ordernum",
				key: "ordernum",
				slots: {
					title: "customTitle"
				},
				scopedSlots: {
					customRender: "ordernum"
				},
			},
			{
				title: "日期",
				dataIndex: "date",
				key: "date",
			},
			{
				title: "订单用户",
				dataIndex: "orderuser",
				key: "orderuser",
			},
			{
				title: "订单师傅",
				dataIndex: "ordermaster",
				key: "ordermaster",
			},
			{
				title: "订单金额",
				dataIndex: "price",
				key: "price",
			},
			{
				title: "订单状态",
				dataIndex: "orderstatus",
				key: "orderstatus",
				scopedSlots: {
					customRender: "orderstatus"
				},
			},
			{
				title: "操作",
				key: "action",
				scopedSlots: {
					customRender: "action"
				},
			},
		]
		return columns
	}
});

// userlist data
Mock.mock(`${domain}/userlistdata`, "get", (req) => {
	if (req.type == "GET") {
		let data = [{
				key: "1",
				username: "刘先生",
				address: "上海市崇明街128号401房",
				userphonenum: "13634781299",
			},
			{
				key: "2",
				username: "刘先生",
				address: "上海市崇明街128号401房",
				userphonenum: "13634781299",
			},
			{
				key: "3",
				username: "刘先生",
				address: "上海市崇明街128号401房",
				userphonenum: "13634781299",
			},
		];
		return data
	}
});

// userlist columns
Mock.mock(`${domain}/userlistcolumns`, "get", (req) => {
	if (req.type == "GET") {
		let columns = [{
				dataIndex: "username",
				key: "username",
				slots: {
					title: "customTitle"
				},
				scopedSlots: {
					customRender: "username"
				},
			},
			{
				title: "用户地址",
				dataIndex: "address",
				key: "address",
			},
			{
				title: "用户手机号码",
				dataIndex: "userphonenum",
				key: "userphonenum",
			},
			{
				title: "操作",
				key: "action",
				scopedSlots: {
					customRender: "action"
				},
			},
		]
		return columns
	}
});

// masterlist data
Mock.mock(`${domain}/masterlistdata`, "get", (req) => {
	if (req.type == "GET") {
		let data = [{
				key: "1",
				mastername: "张师傅",
				decs: "擅长家具维修、家电维修",
				masterphonenum: "13634781299",
			},
			{
				key: "2",
				mastername: "张师傅",
				decs: "擅长家具维修、家电维修",
				masterphonenum: "13634781299",
			},
			{
				key: "3",
				mastername: "张师傅",
				decs: "擅长家具维修、家电维修",
				masterphonenum: "13634781299",
			},
		];
		return data
	}
});

// masterlist columns
Mock.mock(`${domain}/masterlistcolumns`, "get", (req) => {
	if (req.type == "GET") {
		let columns = [{
				dataIndex: "mastername",
				key: "mastername",
				slots: {
					title: "customTitle"
				},
				scopedSlots: {
					customRender: "mastername"
				},
			},
			{
				title: "师傅简介",
				dataIndex: "decs",
				key: "decs",
			},
			{
				title: "师傅手机号码",
				dataIndex: "masterphonenum",
				key: "masterphonenum",
			},
			{
				title: "操作",
				key: "action",
				scopedSlots: {
					customRender: "action"
				},
			},
		]
		return columns
	}
});

// stafflist data
Mock.mock(`${domain}/stafflistdata`, "get", (req) => {
	if (req.type == "GET") {
		let data = [{
				key: "1",
				staffname: " 黄小明",
				staffphonenum: "13634781299",
				staffpw: "f23,.djfienf34v"
			},
			{
				key: "2",
				staffname: "黄小明",
				staffphonenum: "13634781299",
				staffpw: "f23,.djfienf34v"
			},
			{
				key: "3",
				staffname: "黄小明",
				staffphonenum: "13634781299",
				staffpw: "f23,.djfienf34v"
			},
		];
		return data
	}
});

// stafflist columns
Mock.mock(`${domain}/stafflistcolumns`, "get", (req) => {
	if (req.type == "GET") {
		let columns = [{
				dataIndex: "staffname",
				key: "staffname",
				slots: {
					title: "customTitle"
				},
				scopedSlots: {
					customRender: "staffname"
				},
			},
			{
				title: "员工手机号码",
				dataIndex: "staffphonenum",
				key: "staffphonenum",
			},
			{
				title: "员工登录密码",
				dataIndex: "staffpw",
				key: "staffpw",
			},
			{
				title: "操作",
				key: "action",
				scopedSlots: {
					customRender: "action"
				},
			},
		]
		return columns
	}
});
const Mock = require("mockjs");
const Random = Mock.Random;

const domain = "http://helperfaction.com/bgmanagement/api";

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

Mock.mock(`${domain}/tranval`, "get", (req) => {
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
				country: "平均交易金额",
				month: "4月",
				value: 348
			},
			{
				country: "平均交易金额",
				month: "5月",
				value: 3223
			},
			{
				country: "平均交易金额",
				month: "6月",
				value: 2233
			},
			{
				country: "平均交易金额",
				month: "7月",
				value: 1231
			},
			{
				country: "平均交易金额",
				month: "8月",
				value: 934
			},
			{
				country: "平均交易金额",
				month: "9月",
				value: 935
			},
			{
				country: "平均交易金额",
				month: "10月",
				value: 1042
			},
			{
				country: "平均交易金额",
				month: "11月",
				value: 656
			},
			{
				country: "平均交易金额",
				month: "12月",
				value: 878
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
			{
				country: "当月总交易金额",
				month: "4月",
				value: 484
			},
			{
				country: "当月总交易金额",
				month: "5月",
				value: 1023
			},
			{
				country: "当月总交易金额",
				month: "6月",
				value: 392
			},
			{
				country: "当月总交易金额",
				month: "7月",
				value: 754
			},
			{
				country: "当月总交易金额",
				month: "8月",
				value: 912
			},
			{
				country: "当月总交易金额",
				month: "9月",
				value: 2943
			},
			{
				country: "当月总交易金额",
				month: "10月",
				value: 348
			},
			{
				country: "当月总交易金额",
				month: "11月",
				value: 2394
			},
			{
				country: "当月总交易金额",
				month: "12月",
				value: 3920
			},
		];
		return tableData;
	} else {
		return null;
	}
});

Mock.mock(`${domain}/columns`, "get", (req) => {
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

Mock.mock(`${domain}/data`, "get", (req) => {
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
			{
				key: "6",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "2",
			},
			{
				key: "7",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "3",
			},
			{
				key: "8",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "2",
			},
			{
				key: "9",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "2",
			},
			{
				key: "10",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "1",
			},
			{
				key: "11",
				ordernum: "REX28917734BNGE201",
				date: "2019-03-14",
				orderuser: "刘先生",
				ordermaster: "张师傅",
				price: "￥283",
				orderstatus: "1",
			},
			{
				key: "12",
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
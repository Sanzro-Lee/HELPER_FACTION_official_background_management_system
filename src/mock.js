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
				dataIndex: "name",
				key: "name",
				slots: {
					title: "customTitle"
				},
				scopedSlots: {
					customRender: "name"
				},
			},
			{
				title: "Age",
				dataIndex: "age",
				key: "age",
			},
			{
				title: "Address",
				dataIndex: "address",
				key: "address",
			},
			{
				title: "Tags",
				key: "tags",
				dataIndex: "tags",
				scopedSlots: {
					customRender: "tags"
				},
			},
			{
				title: "Action",
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
				name: "John Brown",
				age: 32,
				address: "New York No. 1 Lake Park",
				tags: ["nice", "developer"],
			},
			{
				key: "2",
				name: "Jim Green",
				age: 42,
				address: "London No. 1 Lake Park",
				tags: ["loser"],
			},
			{
				key: "3",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "4",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "5",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "6",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "7",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "8",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "9",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "10",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "11",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
			{
				key: "12",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
		];
		return data
	}
});
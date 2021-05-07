import {List, Checkbox } from 'antd';

const CheckboxList = ({data}: {data: Array<string>}) => {
	return (
		<List
			dataSource={data.map((item) => {
				return <Checkbox>{item}</Checkbox>;
			})}
			renderItem={(item) => {
				return <List.Item>{item}</List.Item>;
			}}
		></List>
	)
};

export default CheckboxList;

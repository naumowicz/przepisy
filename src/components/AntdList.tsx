import 'antd/dist/antd.css';
import { List } from 'antd';

const AntdList = ({list}: {list: Array<string>}) => {
	return (
		<div>
			<List
			bordered
			dataSource={list}
			renderItem={item => (
				<List.Item>{item}</List.Item>
			)}
			/>
		</div>
	)
}

export default AntdList;
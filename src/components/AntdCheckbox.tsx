import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

const AntdCheckbox = ({text}: {text: string}) => {
	return (
		<div>
			<Checkbox>{text}</Checkbox>
		</div>
	)
}

export default AntdCheckbox;

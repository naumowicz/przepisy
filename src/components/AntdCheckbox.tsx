
import 'antd/dist/antd.css';
import './index.css';
import { Checkbox } from 'antd';


const AntdCheckbox = ({text}) => {
	return (
		<div>
			<Checkbox>{text}</Checkbox>
		</div>
	)
}

export default AntdCheckbox;

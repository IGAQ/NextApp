import {Spacer} from '../../../../Atoms/Common/Spacer';
import {UserTextInput} from '../../../../Atoms/Common/Inputs/UserTextInput';
import {useState} from 'react';

export function InputArea({
    type = 'text',
    label = 'Input',
    placeholder = 'Input Placeholder',
    topSpacerSize = 40,
    onChangeValue,
}) {
    const [value, setValue] = useState('');

    const handleChange = async (e) => {
        setValue(e.target.value);
        onChangeValue(e.target.value);
    };

    return (
        <>
            <Spacer axis='vertical' size={topSpacerSize}/>
            <UserTextInput type={type} label={label} value={value} onChange={handleChange}
                placeholder={placeholder}/>
        </>
    );
}
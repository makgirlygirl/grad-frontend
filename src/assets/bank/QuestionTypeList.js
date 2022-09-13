/** */
import { u1, u2, u3, u4, u5, u6, u7, u8 } from '../../components/FileIndex';
import { c1, c2, c3, c4, c5, c6, c7, c8 } from '../../components/FileIndex';
import QuestionTypeButton from "../../components/QuestionTypeButton";

export const bankQuestionTypeList = [
    {id:0, checked: false},
    {id:1, checked: false},
    {id:2, checked: false},
    {id:3, checked: false},
    {id:4, checked: false},
    {id:5, checked: false},
    {id:6, checked: false},
    {id:7, checked: false},
];
const QuestionTypeList = ({onClick, questionTypeList}) => {
    const uncheckedButtonList = [u1, u2, u3, u4, u5, u6, u7, u8];
    const checkedButtonList = [c1, c2, c3, c4, c5, c6, c7, c8];

    return (
        <>
        {questionTypeList.map((it) => (
                    <QuestionTypeButton key={it.id} {...it} onClick={onClick} img_unchecked={uncheckedButtonList[it]} img_checked={checkedButtonList[it]}/>
                ))}
        </>
    );
};
export default QuestionTypeList;
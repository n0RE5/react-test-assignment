import React from 'react'
import { IOption } from "../../../types/globals";
import styles from './Option.module.scss';

interface OptionProps {
    option: IOption;
    onClick: (value: string) => void;
};

const Option: React.FC<OptionProps> = ({option, onClick}) => {
    return (
        <li
            className={styles.option}
            value={option.value}
            onClick={() => onClick(option.value)}
            tabIndex={0}
        >
            {option.title}
        </li>
    );
};

export default Option
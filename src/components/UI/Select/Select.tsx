import React, { useEffect, useRef, useState } from 'react'
import { IOption } from '../../../types/globals';
import Option from '../Option/Option';
import styles from './Select.module.scss';

interface SelectProps {
    selected: string;
    options: IOption[];
    placeholder?: string;
    onChange: (selected: string) => void;
}

const Select: React.FC<SelectProps> = React.memo(({selected, options, placeholder, onChange}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
          if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
            setIsOpen(false);
          }
        };
      
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const handleOptionClick = (value: string) => {
        setIsOpen(false);
        onChange(value);
    };

    const handlePlaceHolderClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div 
            ref={rootRef}
            className={styles.selectWrapper}
            data-is-active={isOpen}
        >
            <div className={styles.arrow}/>
            <div
                className={styles.placeholder}
                onClick={handlePlaceHolderClick}
                tabIndex={0}
            >
                {selected || placeholder}
            </div>
            {isOpen && (
                <ul className={styles.select}>
                    {options.map((option) => (
                        <Option
                            key={option.value}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
})

export default Select;
import { AccordionHeader, AccordionItem, AccordionPanel, Button, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { useState } from 'react';

export interface InsertItemProps {
    discriminator: string;
    color: string;
    backgroundColor: string;
    headerText: string;
    onInsertAction: () => void;
}

const useStyles = makeStyles({
    item: {
        ...shorthands.padding(tokens.spacingVerticalXXS, tokens.spacingHorizontalNone, tokens.spacingVerticalNone)
    },
    header: {
        display: 'flex'
    },
    insertButtonContainer: {
        alignSelf: 'center', 
        marginRight: tokens.spacingHorizontalM
    }
});

const InsertItem = (props: React.PropsWithChildren<InsertItemProps>) => {
    const classes = useStyles();
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const primaryStyle = isButtonHovered ? {} : { color: props.color };

    const headerRenderer = (Inner, innerProps) => {
        return (
            <>
                <Inner {...innerProps} />
                <div className={classes.insertButtonContainer}>
                    <Button 
                        size='small' 
                        appearance='subtle' 
                        onClick={props.onInsertAction} 
                        style={primaryStyle} 
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    >
                        Insert
                    </Button>
                </div>
            </>
        );
    }

    return (
        <AccordionItem className={classes.item} key={props.discriminator} value={props.discriminator}>
            <AccordionHeader 
                className={classes.header}
                style={{color: props.color, backgroundColor: props.backgroundColor}}
                button={{children: headerRenderer} as any}
            >
                {props.headerText}
            </AccordionHeader>
            <AccordionPanel>{props.children}</AccordionPanel>
        </AccordionItem>
    )
};

export default InsertItem;
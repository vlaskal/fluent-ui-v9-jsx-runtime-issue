import InsertItem from "./InsertItem";

export const InsertActionItem1 = () => {
    return (
        <InsertItem color="white" backgroundColor="green" headerText="Action Item 1" discriminator="action1" onInsertAction={() => { alert("Inserting Action 1"); }}>
            Content of action 1
        </InsertItem>
    );
}

export const InsertActionItem2 = () => {
    return (
        <InsertItem color="white" backgroundColor="blue" headerText="Action Item 2" discriminator="action2" onInsertAction={() => { alert("Inserting Action 2"); }}>
            Content of action 2
        </InsertItem>
    );
}

export const InsertActionItem3 = () => {
    return (
        <InsertItem color="white" backgroundColor="black" headerText="Action Item 3" discriminator="action3" onInsertAction={() => { alert("Inserting Action 3"); }}>
            Content of action 3
        </InsertItem>
    );
}
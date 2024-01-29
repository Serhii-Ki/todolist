type ToDoHeaderPropsType = {
	title: string;
};

export function ToDoListHeader({ title }: ToDoHeaderPropsType) {
	return <h3>{title}</h3>;
}

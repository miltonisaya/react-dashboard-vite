interface Props {
    children: React.ReactNode;
}

const BaseContainer: React.FC<Props> = ({children}) => {
    return (
            <div style={{margin: '100px auto'}}>
                {children}
            </div>
    );
}

export default BaseContainer;
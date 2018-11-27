
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

export const Hoc = (PassedComponent) => {
    return class myHoc extends React.Component {
        static displayName = `(myHoc${PassedComponent.displayName || PassedComponent.name || 'Component'})`;
        
        render() {
            // 1. access props member: this.props.method
            // 2. aceess inner member: PassedComponent.method
            
            // use forwardRef
        
            return (
                <PassedComponent {...this.props} />
            )
        }
    };
    
    hoistNonReactStatic(myHoc, PassedComponent);
    
    return myHoc;
}

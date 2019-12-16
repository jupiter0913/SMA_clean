import * as React from 'react'

export const PortalContext = React.createContext({
    gates: {},
    teleport: (gateName, element) => {
        return
    }
});


export class PortalProvider extends React.Component {
    state = {
        gates: {}
    }

    render() {
        const { children } = this.props
        return (
            <PortalContext.Provider value={{
                gates: this.state.gates,
                teleport: this.teleport
            }}>
                {children}
            </PortalContext.Provider>
        )
    }

    teleport = (gateName, element) =>
        this.setState({
            gates:
            {
                ...this.state.gates,
                [gateName]: element
            }
        })
}

export const PortalGate = props => {
    const { gateName, children } = props
    return (
        <PortalContext.Consumer>
            {value => {
                return (
                    <React.Fragment>
                        {value.gates[gateName]}
                        {children && children(value.teleport)}
                    </React.Fragment>
                )
            }}
        </PortalContext.Consumer>
    )
}

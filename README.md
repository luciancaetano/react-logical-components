# React <Logical.Components/>
**In development 😁**

React <Logical.Components/> is a library of components designed to improve the visual quality and ease of applying logic operations, iterations etc. in React JSx.

The way we currently use the if condition for an element

    {condition && <Element />}

See how React <Logical.Components/> simplifies it

    <ShowIf value = {true}>
         <Element />
    </ ShowIf>
    
# How to use 🧐

    yarn add react-logical-components
or

    npm install --save react-logical-components

## ShowIf 😜
This component will only render children if the value attribute is true, see an example usage

    <ShowIf value={this.state.hello == 'hello'}>
    	<input type="text" value="Hello World"/>
    </ShowIf>

## Switch, SwitchCase , SwitchDefault 🤗
This component already implements the much-used switch, see an example usage

    <Switch value={gender}>
    	<SwitchCase value={'male'}>
            Mr.
    	</SwitchCase>
    	<SwitchCase value={'female'}>
            Mrs.
    	</SwitchCase>
        <SwitchDefault>
            Unknown
        </SwitchDefault>
    </Switch>

## Foreach 🤩
This component makes an interaction on a vector or an object using Object.keys, see an example usage

    <Foreach collection={[1, 2, 3]}>
        { (item, index) => <li key={index}>{item}</li>}
    </Foreach>

## More coming 😎
I started this project on January 24, 2018, so I am working to implement and test these components, I am also working on new concepts of components, ah also I accept ideas.

Thanks for being interested in my little project: D

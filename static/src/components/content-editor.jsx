import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState, Modifier, RichUtils, convertToRaw} from 'draft-js'


class ContentEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.focus = () => this.refs.editor.focus()
    this.onChange = (editorState) => this.setState({editorState})
    this.toggleColor = (toggledColor) => this._toggleColor(toggledColor)
  }

}
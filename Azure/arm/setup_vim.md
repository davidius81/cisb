

# Install following Plugin for vim

* MarkDown syntax
* json syntax
* Puppet syntax


First install Plugin Manage Vundle

*Source:https://github.com/VundleVim/Vundle.vim*

```
# cd
# git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim
#
```

Add this to your ~/.vimrc, on CentOS, you may require to add syntax on in you ~/.vimrc, but not required on Ubuntu.

```vim
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'gmarik/Vundle.vim'

"Plugin to highlight json syntax
Plugin 'elzr/vim-json'

"Markdown plugin
Plugin 'godlygeek/tabular'
Plugin 'plasticboy/vim-markdown'

" Puppet syntax
Plugin 'rodjek/vim-puppet'
" Puppet Syntax valiator
Plugin 'scrooloose/Syntastic'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line

" Disable Markdown Folding:
let g:vim_markdown_folding_disabled=1
"Disable Concealing
let g:vim_json_syntax_conceal = 0
```


Open vim and Install the Plugins
```vim
# vim
:PluginInstall
```

See Vundle Doc
```vim
:h vundle
```


# MarkDown Mapping
*source:https://github.com/plasticboy/vim-markdown*

Mappings

The following work on normal and visual modes:

gx: open the link under the cursor in the same browser as the standard gx command. <Plug>Markdown_OpenUrlUnderCursor

The standard gx is extended by allowing you to put your cursor anywhere inside a link.

For example, all the following cursor positions will work:
```vim
[Example](http://example.com)
^  ^    ^^   ^       ^
1  2    34   5       6

<http://example.com>
^  ^               ^
1  2               3
```
Known limitation: does not work for links that span multiple lines.

]]: go to next header. <Plug>Markdown_MoveToNextHeader

[[: go to previous header. Contrast with ]c. <Plug>Markdown_MoveToPreviousHeader

][: go to next sibling header if any. <Plug>Markdown_MoveToNextSiblingHeader

[]: go to previous sibling header if any. <Plug>Markdown_MoveToPreviousSiblingHeader

]c: go to Current header. <Plug>Markdown_MoveToCurHeader

]u: go to parent header (Up). <Plug>Markdown_MoveToParentHeader

This plugin follows the recommended Vim plugin mapping interface, so to change the map ]u to asdf, add to your .vimrc:

map asdf <Plug>Markdown_MoveToParentHeader
To disable a map use:

map <Plug> <Plug>Markdown_MoveToParentHeader
Commands

:HeaderDecrease:

Decrease level of all headers in buffer: h2 to h1, h3 to h2, etc.

If range is given, only operate in the range.

If an h1 would be decreased, abort.

For simplicity of implementation, Setex headers are converted to Atx.

:HeaderIncrease: Analogous to :HeaderDecrease, but increase levels instead.

:SetexToAtx:

Convert all Setex style headers in buffer to Atx.

If a range is given, e.g. hit : from visual mode, only operate on the range.

:TableFormat: Format the table under the cursor like this.

Requires Tabular.

The input table must already have a separator line as the second line of the table. That line only needs to contain the correct pipes |, nothing else is required.

:Toc: create a quickfix vertical window navigable table of contents with the headers.

Hit <Enter> on a line to jump to the corresponding line of the markdown file.

:Toch: Same as :Toc but in an horizontal window.

:Toct: Same as :Toc but in a new tab.

:Tocv: Same as :Toc for symmetry with :Toch and Tocv.


# Json syntax 
*Source:https://github.com/elzr/vim-json*


![alt text](https://cloud.githubusercontent.com/assets/183877/7018898/98e428e0-dccf-11e4-9ab8-c554b3556155.jpg "Json highligh")


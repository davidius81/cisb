

# Enable json syntax in vim


*Source:https://github.com/VundleVim/Vundle.vim*


Install Plugin Manage Vundle
```
# cd
# git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim
#
```

Add this to your ~/.vimrc

```jason
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
```

Open vim and Install the Plugins

```
# vim
:PluginInstall
```

See Vundle Doc
```
:h vundle
```



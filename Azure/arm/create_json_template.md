

# Create your own Json template for ARM v2
*Source: https://azure.microsoft.com/en-us/documentation/articles/resource-group-authoring-templates/*

Use json syntac in VIM
*Source:https://ubuntuincident.wordpress.com/tag/json-vim/*
```vim
# vim ~/.vimrc
" pretty-print JSON files
autocmd BufRead,BufNewFile *.json set filetype=json
" json.vim is here: http://www.vim.org/scripts/script.php?script_id=1945
autocmd Syntax json sou ~/.vim/syntax/json.vim
" json_reformat is part of yajl: http://lloyd.github.com/yajl/
autocmd FileType json set equalprg=json_reformat
```
When opening a .json file, it will be colored using the json.vim syntax file. Selecting a text and pressing the “=” button will indent the marked text using json_reformat.


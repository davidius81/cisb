node default {
        include stdlib
}

if $kernel == "Linux" {

#Set default vim environment

    package { "vim":
                ensure => "installed"
    }

  #     file_line {'vim_header':
  # path => '/etc/vimrc',
  # line => 'filetype plugin indent on',
  #}
  #file_line {'vim_tabstop':
  # path => '/etc/vimrc',
  # line => 'set tabstop=4',
  #}
  #file_line {'vim_shiftwidth':
  # path => '/etc/vimrc',
  # line => 'set shiftwidth=4',
  #}
  #file_line {'vim_expandtab':
  # path => '/etc/vimrc',
  # line => 'set expandtab',
  #}

}

if $operatingsystem == "CentOS" {

        package { "tree":
                ensure => "installed"
        }
        package { "screen":
                ensure => "installed"
        }
        package { "nmap-ncat":
                ensure => "installed"
        }
        package { "git":
                ensure => "installed"
        }

}


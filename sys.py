import requests

def get_user_repositories(username):
    url = "https://api.github.com/users/{}/repos".format(username)
    response = requests.get(url)

    if response.status_code == 200:
        repositories = response.json()
        return repositories
    else:
        print("Failed to retrieve repositories.")
        return None

def save_repositories_to_file(repositories, filename):
    with open(filename, "w", encoding="utf-8") as file:
        file.write("<html>\n")
        file.write("<head>\n")
        file.write('<link href="style.css" rel="stylesheet" type="text/css">\n')
        file.write("</head>\n")
        file.write("<body>\n")

        for repo in repositories:
            repo_name = repo["name"]
            repo_url = repo["html_url"]
            repo_description = repo["description"]
            repo_stars = repo["stargazers_count"]
            repo_forks = repo["forks_count"]

            file.write('<details class="repo">\n')
            file.write('<summary class="repo-title"><strong>{}</strong> <span class="repo-badge">Stars: {} Forks: {}</span></summary>\n'.format(repo_name, repo_stars, repo_forks))
            file.write('<p class="repo-link"><a href="{}">{}</a></p>\n'.format(repo_url, repo_url))
            file.write('<p class="repo-description">{}</p>\n'.format(repo_description))
            file.write("</details>\n")
            file.write("<br>\n")

        file.write('<footer class="footer">\n')
        file.write('  <p class="footer-text">◎510208 Software World | GitHub Pages</p>\n')
        file.write('</footer>\n')
        file.write("</body>\n")
        file.write("</html>\n")

# 輸入你的 GitHub 使用者名稱
username = "510208"

# 取得使用者的儲存庫
repositories = get_user_repositories(username)

# 如果成功取得儲存庫，則將其輸出到檔案中
if repositories is not None:
    output_filename = "github_repo.html"
    save_repositories_to_file(repositories, output_filename)
    print("儲存庫已成功輸出到 {} 檔案中。".format(output_filename))
